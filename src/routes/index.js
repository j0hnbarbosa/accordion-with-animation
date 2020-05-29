import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../components/login';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  </BrowserRouter>
);
