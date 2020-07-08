import React, { useState } from 'react';
import { IProductGrid } from '../../../models/Product';
import {
	ProductGridContainer,
	ProductGridCard,
	ProductGridNotFound,
	ProductPrice,
	ProductCategory,
	ProductStock
} from './styles';
import {
	Skeleton,
	Modal
} from 'antd';
import Meta from 'antd/lib/card/Meta';
import {
	EditOutlined,
	DeleteOutlined,
	ExclamationCircleOutlined,
	FrownOutlined
} from '@ant-design/icons';
import { Highlighted } from '../../../components/Highlighted';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
const { confirm } = Modal;

const ProductGrid: React.FC<IProductGrid> = ({ products, loading, filterString, triggerUpdate }) => {

	const history = useHistory();

	const showDeleteConfirm = (id: string) => {
		if (loading) return;
		confirm({
			title: 'Do you want to delete this product?',
			icon: <ExclamationCircleOutlined />,
			content: 'This action cannot be undone.',
			onOk() {
				return api.deleteProduct(id)
					.then(() => triggerUpdate())
					.catch((e) => console.log(e));
			},
		});
	}

	return (
		<ProductGridContainer>
			{products.length !== 0 && products.map(product => <ProductGridCard key={product.id}
				actions={[
					<DeleteOutlined onClick={() => showDeleteConfirm(product.id)} key="delete" />,
					<EditOutlined onClick={() => { return loading ? '' : history.push(`/products/${product.id}`)}} key="edit" />
				]}
			>
				<Skeleton loading={loading} active>
					<Meta
						title={<Highlighted highlight={filterString} text={product.name} />}
						description={<Highlighted highlight={filterString} text={product.description} />}
					/>
					<ProductCategory>Category: <Highlighted highlight={filterString} text={product.category} /></ProductCategory>
					<ProductPrice>$ {product.price.toFixed(2)}</ProductPrice>
					<ProductStock>{product.avaliableUnits} units avaliable</ProductStock>
				</Skeleton>
			</ProductGridCard>)}
			<ProductGridNotFound>
				<FrownOutlined />
				No products to show.
			</ProductGridNotFound>

		</ProductGridContainer>
	);
};

export default ProductGrid;
