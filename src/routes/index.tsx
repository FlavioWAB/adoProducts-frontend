import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';

import Route from './route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
