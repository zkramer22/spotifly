import { connect } from 'react-redux';
import React from 'react';
import { createPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PlaylistForm from './playlist_form';

// WHAT AM I PASSIN THRU HERE? //
const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    formType: 'create'
  };
};

const mdp = dispatch => {
  return {
    processForm: playlist => dispatch(createPlaylist(playlist)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(PlaylistForm);
