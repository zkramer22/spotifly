import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

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

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store }/>, root);
});
