import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting_container';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';

import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route exact path="/" component={ GreetingContainer }/>
    <AuthRoute exact path="/login" component={ LogInFormContainer } />
    <AuthRoute exact path="/signup" component={ SignUpFormContainer } />
    { /* <AuthRoute path="/collection" component={ CollectionContainer } /> */ }
    { /* <AuthRoute path="/search" component={ SearchContainer } /> */ }


  </div>
);

export default App;
