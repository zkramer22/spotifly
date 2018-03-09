import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import PlaylistFormContainer from './playlists/playlist_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create':
      component = <PlaylistFormContainer />;
    // case 'delete':
    //   component = <PlaylistDeleteContainer />;
    default:
      return null;
  }

  // Prob wanna just make an "X" to click on, instead of letting the user
  // close the modal by clicking anywhere.
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
