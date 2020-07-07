import React from 'react';
import { useAuth } from '../hooks/auth';
import { IRoute } from '../models/Route';
import {
	Redirect,
	Route as ReactDOMRoute,
} from 'react-router-dom';

const Route: React.FC<IRoute> = ({
	component: Component,
	internal = false,
	...rest
}) => {
	const { user } = useAuth();

	return (
		<ReactDOMRoute {...rest}
			render={({ location }) => {
				return internal === !!user ? (<Component />) : (<Redirect to={{ pathname: internal ? '/' : '/home' }} />);
			}}
		/>
	);
};

export default Route;
