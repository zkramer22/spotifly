import React from 'react';
import { Provider, connect } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import Modal from './modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SearchForm from './search/search_form';
import PlaylistIndex from './playlists/playlist_index';
import PlaylistDetail from './playlists/playlist_detail';
import AlbumDetail from './albums/album_detail';
import ArtistDetail from './artists/artist_detail';
import SidebarContainer from './bars/sidebar_container';
import Playbar from './bars/playbar';

const App = (props) => (
  <div>
    <Modal />
    <AuthRoute
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
      component={ PlaylistDetail } />
    <Route
      exact path="/collection/playlists"
      component={ PlaylistIndex } />
    <Route
      exact path="/albums/:albumId"
      component={ AlbumDetail } />
    <Route
      exact path="/artists/:artistId"
      component={ ArtistDetail } />
    <Route
      path="/searches"
      component={ SearchForm } />
    <SidebarContainer />
    <Playbar />
  </div>
);

export default App;
