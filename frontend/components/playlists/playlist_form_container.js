import { connect } from 'react-redux';
import React from 'react';
import { createPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PlaylistForm from './playlist_form';

// WHAT AM I PASSIN THRU HERE? //
const msp = (state) => {
  return {
    playlist: {},
    formType: 'create'
  };
};

const mdp = dispatch => {
  return {
    processForm: playlistName => dispatch(createPlaylist(playlistName)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(PlaylistForm);
