import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { removeCurrentTrack } from '../../actions/track_actions';
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
    removeCurrentTrack: () => dispatch(removeCurrentTrack()),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Sidebar);
