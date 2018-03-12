import { connect } from 'react-redux';
import React from 'react';
import { deletePlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PlaylistDelete from './playlist_delete';

const msp = (state) => {
  return {
    playlists: Object.values(state.entities.playlists)
  };
};

const mdp = dispatch => {
  return {
    processForm: playlistId => dispatch(deletePlaylist(playlistId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(PlaylistDelete);
