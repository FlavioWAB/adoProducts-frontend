import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import Home from '../pages/Home';

import Route from './route';
import Internal from '../pages/Internal';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/home" internal exact component={Internal} />
    <Route path="/products" internal exact component={Internal} />
    <Route path="/products/:id" internal exact component={Internal} />
  </Switch>
);

export default Routes;
