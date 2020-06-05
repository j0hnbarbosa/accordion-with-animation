import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../pages/login';
import ShowItems from '../pages/showItems';

const PrivateRoutes = ({
  component: Component, isAutheticated, token, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      isAutheticated
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    )}
  />
);

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isAutheticated: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};


const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route path={['/', 'login']} exact component={Login} />
      <PrivateRoutes path="/showitems" exact component={ShowItems} {...props} />
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  isAutheticated: PropTypes.bool.isRequired,
};

const mapStatetoProps = (state) => {
  const { token, isAutheticated } = state.authetication;
  return {
    token,
    isAutheticated,
  };
};

export default connect(mapStatetoProps)(Routes);
