import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { AuthContextData, IAuthData, ISignInCredentials } from '../models/User';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

    const [authData, setAuthData] = useState<IAuthData>(() => {

        const token = localStorage.getItem('adoProducts::token');
        const user = localStorage.getItem('adoProducts::user');

        if (token && user) {
            api.setToken(token);
            return { token, user: JSON.parse(user) };
        }

        return {} as IAuthData;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const credentials: ISignInCredentials = { email, password };

        const response = await api.login(credentials);

        const authData: IAuthData = response.data;

        localStorage.setItem('adoProducts::token', authData.token);
        localStorage.setItem('adoProducts::user', JSON.stringify(authData.user));

        api.setToken(authData.token);

        setAuthData(authData);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('adoProducts::token');
        localStorage.removeItem('adoProducts::user');

        setAuthData({} as IAuthData);
    }, []);

    return (
        <AuthContext.Provider value={{
            user: authData.user,
            token: authData.token,
            signIn,
            signOut
        }} >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be within an AuthProvider component');
    }

    return context;
}

export { AuthProvider, useAuth };
