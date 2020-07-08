import axios from 'axios';
import { ISignInCredentials, IUser } from '../models/User';
import { IProduct } from '../models/Product';

class Api {
	private routes = {
		LOGIN: '/login',
		USER: '/users',
		PRODUCT: '/products',
		PRODUCT_PAGED: '/products/result-limit/:limit/page/:page',
		PRODUCT_DELETE: '/products/:id',
		PRODUCT_SEARCH: '/products/search/query/:query',
		PRODUCT_SEARCH_PAGED: '/products/search/result-limit/:limit/page/:page/query/:query'
	}

	private api = axios.create({
		baseURL: 'https://adoproducts.herokuapp.com',
	});

	setToken(token: string): void {
		this.api.defaults.headers.authorization = `Bearer ${token}`;
	}

	login(loginCredentials: ISignInCredentials) {
		return this.api.post(this.routes.LOGIN, loginCredentials)
	}

	registerUser(userData: IUser) {
		return this.api.post(this.routes.USER, userData)
	}

	searchProducts(query: string = '', limit: number = 10, page: number = 1) {
		const searchQuery = query === '' ? this.routes.PRODUCT_PAGED : this.routes.PRODUCT_SEARCH_PAGED;

		return this.api.get(searchQuery
			.replace(':limit', limit.toString())
			.replace(':page', page.toString())
			.replace(':query', query));
	}

	deleteProduct(id: string) {
		return this.api.delete(this.routes.PRODUCT_DELETE
			.replace(':id',id));
	}

	registerProduct(productData: IProduct) {
		return this.api.post(this.routes.PRODUCT, productData)
	}
}

const api = new Api();

export default api;
