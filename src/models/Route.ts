import { RouteProps } from 'react-router-dom';

export interface IRoute extends RouteProps {
    internal?: boolean;
    component: React.ComponentType;
}