import axios from 'axios';
import { ISignInCredentials } from '../models/User';


class Api {
	api = axios.create({
		baseURL: 'https://adoproducts.herokuapp.com',
	});

	setToken(token: string):void {
		this.api.defaults.headers.authorization = `Bearer ${token}`;
	}

	login(loginCredentials: ISignInCredentials) {
		return this.api.post('/login', loginCredentials)
	}
}

const api = new Api();

export default api;
