import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import Modal from './modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import PlaylistDetailContainer from './playlists/playlist_detail_container';
import SidebarContainer from './bars/sidebar_container';
import SearchForm from './search/search_form';

const App = () => (
  <div>
    <Modal />
    <Route
      exact path="/"
      component={ GreetingContainer } />
    <AuthRoute
      exact path="/login"
      component={ LogInFormContainer } />
    <AuthRoute
      exact path="/signup"
      component={ SignUpFormContainer } />
    <Route
      exact path="/collection/playlists/:playlistId"
      component={ PlaylistDetailContainer } />
    <Route
      exact path="/collection/playlists"
      component={ PlaylistIndexContainer } />
    <Route
      path="/searches"
      component={ SearchForm } />
    <Route
      path="/searches"
      component={SidebarContainer} />
    <Route
      path="/collection"
      component={ SidebarContainer } />
  </div>
);

export default App;
