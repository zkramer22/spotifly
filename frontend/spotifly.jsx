import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   // move line 20 to here
  // }

  store = configureStore();
  //testing//
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login();
  window.logout = logout();
  window.signup = signup();
  //testing//

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
