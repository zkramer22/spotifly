import React from 'react';
import ReactDOM from 'react-dom';

import { persistStore, autoRehydrate } from 'redux-persist';

import Root from './components/root';
import configureStore from './store/store';

import { login, logout, signup } from './actions/session_actions';
import { requestAllPlaylists, requestSinglePlaylist, addTrackToPlaylist } from './actions/playlist_actions';
import { fetchResults } from './actions/search_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // WINDOW TESTING
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchResults = fetchResults;
  // window.addTrackToPlaylist = addTrackToPlaylist;
  // window.login = login;
  // window.signup = signup;
  // window.requestAllPlaylists = requestAllPlaylists;
  // window.requestSinglePlaylist = requestSinglePlaylist;

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store }/>, root);
});
