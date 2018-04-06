import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {
  removeCurrentTrack,
  receiveCurrentTrack,
  requestToto
} from '../../actions/track_actions';
import Sidebar from './sidebar';

const msp = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    playlists: state.entities.playlists
  };
};

const mdp = dispatch => {
  return {
    requestToto: () => dispatch(requestToto()),
    receiveCurrentTrack: () => dispatch(receiveCurrentTrack(220)), // "Africa" -- Toto. change as necessary
    removeCurrentTrack: () => dispatch(removeCurrentTrack()),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Sidebar);
