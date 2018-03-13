import { connect } from 'react-redux';
import React from 'react';
import { deletePlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PlaylistDelete from './playlist_delete';

// const msp = (state) => {
//   return {
//     playlists: Object.values(state.entities.playlists)
//   };
// };

const mdp = (dispatch, ownProps) => {
  return {
    processForm: () => dispatch(deletePlaylist(ownProps.match.params.playlistId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(PlaylistDelete);

// when allowing playlist deletion from playlistIndex, perhaps use state
// to set a "playlistToDelete" or something
