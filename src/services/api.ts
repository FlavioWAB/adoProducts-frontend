import axios from 'axios';
import { ISignInCredentials, IUser } from '../models/User';


class Api {
	routes = {
		LOGIN: '/login',
		USER: '/users'
	}

	api = axios.create({
		baseURL: 'https://adoproducts.herokuapp.com',
	});

	setToken(token: string):void {
		this.api.defaults.headers.authorization = `Bearer ${token}`;
	}

	login(loginCredentials: ISignInCredentials) {
		return this.api.post(this.routes.LOGIN, loginCredentials)
	}

	registerUser(userData: IUser) {
		return this.api.post(this.routes.USER, userData)
	}
}

const api = new Api();

export default api;
