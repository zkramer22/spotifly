import React from 'react';
import { connect } from 'react-redux';
import { deletePlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class PlaylistDelete extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm().then(response => {
      this.props.closeModal();
      this.props.history.push("/collection/playlists/");
    });
  }

  handleEnter(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == '13') { null }
  }

  render() {
    return (
      <div className="playlist-form-container">
        <div className="close-x-container">
          <span
            onClick={ this.props.closeModal }
            className="close-x">X</span>
        </div>

        <div className="playlist-form-wrapper">
          <h1>Do you really want to delete this playlist?</h1>

          <form
            onSubmit={ this.handleSubmit }
            onKeyPress={ this.handleEnter }
            className="delete-playlist-form">

            <div className="playlist-button-group">
              <div className="playlist-cancel-container">
                <button
                  className="playlist-cancel-button"
                  onClick={ this.props.closeModal }>CANCEL
                </button>
              </div>
              <div className="playlist-submit-container">
                <input
                  id="delete-playlist"
                  type="submit"
                  value="DELETE" />
              </div>
            </div>

          </form>

        </div>
      </div>
    );
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    processForm: () => dispatch(deletePlaylist(ownProps.match.params.playlistId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdp)(PlaylistDelete);


// const msp = (state) => {
//   return {
//     playlists: Object.values(state.entities.playlists)
//   };
// };

// when allowing playlist deletion from playlistIndex, perhaps use state
// to set a "playlistToDelete" or something
