import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import GreetingContainer from './greeting_container';
import SignUpFormContainer from './signup_form_container';
import LogInFormContainer from './login_form_container';
import PlaylistIndexContainer from './playlists/playlist_index_container';
import PlaylistDetailContainer from './playlists/playlist_detail_container';

const App = () => (
  <div>
    <Route exact path="/" component={ GreetingContainer } />
    <AuthRoute exact path="/login" component={ LogInFormContainer } />
    <AuthRoute exact path="/signup" component={ SignUpFormContainer } />
    { /* Combine Playlist, Artist, Album, Track, and SideNav containers into the CollectionContainer */ }
    { /* <Route path="/collection" component={ CollectionContainer } */ }
    <Route exact path="/collection/playlists/:playlistId" component={ PlaylistDetailContainer } />
    <Route exact path="/collection/playlists" component={ PlaylistIndexContainer } />
  </div>
);

export default App;
