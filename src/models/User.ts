export interface IUser {
	id: string;
	email: string;
	name: string;
}

export interface IAuthData {
	token: string;
	user: IUser;
}

export interface ISignInCredentials {
	email: string;
	password: string;
}

export interface AuthContextData {
	user: IUser;
	token: string;
	signIn(credentials: ISignInCredentials): Promise<void>;
	signOut(): void;
}