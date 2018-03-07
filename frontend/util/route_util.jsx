import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/collection" />
    )
  )} />
);

// TODO: line 10: make sure we redirect to the user's home library upon login.

const msp = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(msp)(Auth));
