import React, { useState, useEffect } from 'react';
import PageContentWrapper from '../../components/PageContentWrapper';
import faker from 'faker';
import {
	Avatar,
	Menu,
	Dropdown,
	Pagination,
} from 'antd';
import {
	UserOutlined,
	DownOutlined,
	PlusOutlined
} from '@ant-design/icons';
import { useAuth } from '../../hooks/auth';
import {
	HomeLayout,
	HomeHeader,
	HomeContent,
	HeaderLogo,
	HeaderAvatarWraper,
	HeaderAvatarDropdownWrapper,
	HomeContainer,
	HomeNewProductButton,
	HomeSearch,
	HomePagination
} from './styles';
import { Link } from 'react-router-dom';
import headerLogo from '../../img/company-header-logo.png'
import headerLogoMini from '../../img/company-header-logo-mini.png'
import DefaultContainer from '../../components/DefaultContainer';
import { IProduct } from '../../models/Product';
import ProductGrid from './ProductGrid';
import api from '../../services/api';
import { HTTPResponseCodes } from '../../models/Constants';

const Home: React.FC = () => {

	const RESULTS_LIMIT = 10;
	let productPlaceholder: IProduct[] = [];

	for (let i = 0; i < 10; i++) {
		productPlaceholder.push({
			id: faker.random.uuid(),
			name: faker.commerce.productName(),
			description: faker.lorem.paragraph(),
			category: faker.commerce.department(),
			price: Number(faker.commerce.price()),
			avaliableUnits: Number(faker.finance.amount())
		})
	}
	const authentication = useAuth();
	const firstName = authentication.user.name.split(' ')[0];
	const [homeFilterData, setHomeFilterData] = useState<string>('');
	const [searchTimeout, setSearchTimeout] = useState<number>(0);
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(productPlaceholder);
	const [totalResults, setTotalResults] = useState<number>(10);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(true);

	const LogoutDropdownContent = (
		<Menu>
			<Menu.Item onClick={() => authentication.signOut()} key="0">
				Logout
			</Menu.Item>
		</Menu>
	);
	
	// Fires only when the user has stopped typing (not typed for 500ms)
	const fireSearchTimeout = (query: string) => {
		setHomeFilterData(query);
		if (searchTimeout) {
			clearTimeout(searchTimeout);
		}
		setSearchTimeout(setTimeout(() => {
			filterProducts(query);
			setCurrentPage(1);
		}, 500))
	}

	const reloadProducts = () => {
		setCurrentPage(1);
		filterProducts();
	}

	const filterProducts = async (query?: string) => {

		// This is a way to bypass JSs closure, and get the lates filter data.
		const queryString = typeof query === 'undefined' ? homeFilterData : query;

		setLoading(true);
		setFilteredProducts(productPlaceholder);

		try {
			const searchProductsResponse = await api.searchProducts(queryString, RESULTS_LIMIT, currentPage);
			const { total, products } = searchProductsResponse.data;
			setFilteredProducts(products);
			setTotalResults(total);
		} catch (e) {

			const responseStatus: Number = e.response.status as Number;

			if (responseStatus === HTTPResponseCodes.NOT_FOUND) {
				setFilteredProducts([]);
				setTotalResults(0);
			}

		}
		setLoading(false);
	}

	useEffect(() => {
		filterProducts();
	}, []);

	useEffect(() => {
		filterProducts();
	}, [currentPage]);

	return (
		<PageContentWrapper>
			<HomeLayout>
				<HomeHeader>
					<HomeContainer>
						<Link to='/home'>
							<picture>
								<source media="(max-width: 767px)" srcSet={headerLogoMini} />
								<source media="(min-width: 768px)" srcSet={headerLogo} />
								<HeaderLogo src={headerLogoMini} alt="Company logo" />
							</picture>
						</Link>
						<HeaderAvatarDropdownWrapper>
							<Dropdown overlay={LogoutDropdownContent} trigger={['click']}>
								<HeaderAvatarWraper>
									<Avatar icon={<UserOutlined />} /> Hello, {firstName} <DownOutlined />
								</HeaderAvatarWraper>
							</Dropdown>
						</HeaderAvatarDropdownWrapper>
					</HomeContainer>
				</HomeHeader>
				<HomeContent>
					<DefaultContainer>
						<HomeNewProductButton
							size="large"
							type="primary"
							block
							icon={<PlusOutlined />}>
							New Product
    					</HomeNewProductButton>
						<HomeSearch
							size="large"
							placeholder="Filter products"
							onChange={value => fireSearchTimeout(value.target.value)}
						/>
						<ProductGrid triggerUpdate={() => reloadProducts()} filterString={homeFilterData} products={filteredProducts} loading={loading} />
						{filteredProducts.length !== 0 && <HomePagination
							simple
							onChange={(page) => setCurrentPage(page)}
							current={currentPage}
							pageSize={RESULTS_LIMIT}
							total={totalResults} />}
					</DefaultContainer>
				</HomeContent>
			</HomeLayout>
		</PageContentWrapper>
	);
};

export default Home;
