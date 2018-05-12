import React from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      creator_id: this.props.currentUser.id
    };
    this.updateName = this.updateName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  updateName(e) {
    this.setState({ name: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = Object.assign({}, this.state);
    this.props.processForm(playlist).then((response) => {
      this.props.history.push(`/collection/playlists/${response.payload.playlist.id}`)});
  }

  handleEnter(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == '13') { this.handleSubmit(e) }
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
          <h1>Create new playlist </h1>
          <form onSubmit={ this.handleSubmit } onKeyPress={ this.handleEnter } className="playlist-form">
            <span style={{ fontSize: "12px", letterSpacing: "1px" }}>Playlist Name</span>
            <input
              className="playlist-input"
              type="text"
              value={ this.state.name }
              onChange={ this.updateName }
              placeholder="Start typing..."
              autoFocus="autofocus"
              />
            <div className="playlist-button-group">
              <div className="playlist-cancel-container">
                <button
                  className="playlist-cancel-button"
                  onClick={ this.props.closeModal }>CANCEL
                </button>
              </div>
              <div className="playlist-submit-container">
                <input
                  id="create-playlist"
                  type="submit"
                  value="CREATE" />
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

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
