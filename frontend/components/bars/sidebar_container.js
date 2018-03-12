import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from './sidebar';

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    playlists: state.entities.playlists
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(Sidebar);
