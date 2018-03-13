import React from 'react';
import { Route } from 'react-router-dom';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PlaylistFormContainer from './playlists/playlist_form_container';
import PlaylistDeleteContainer from './playlists/playlist_delete_container';
import PlaylistAddTrack from './playlists/playlist_add_track';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create':
      component = <PlaylistFormContainer />;
      break;
    case 'delete':
      component = <Route
        path='/collection/playlists/:playlistId'
        component={ PlaylistDeleteContainer } />;
      break;
    case 'add':
      component = <PlaylistAddTrack />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const msp = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
