import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistDelete extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlistId: this.props.playlists[0].id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlistId = this.state.playlistId
    this.props.processForm(playlistId).then((response) => {
      this.props.history.push("/collection/playlists/")
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

export default withRouter(PlaylistDelete);
