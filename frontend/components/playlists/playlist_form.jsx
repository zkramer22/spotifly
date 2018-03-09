// MIGHTY MODAL TIME //
import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playlistName: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateName(e) {
    this.setState({ playlistName: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlistName = Object.assign({}, this.state);
    this.props.processForm(playlistName)
  }

  render() {
    return (
      <div className="playlist-form-container">
        <div onClick={ this.props.closeModal } className="close-x">X</div>
        <br/>
        <h1>Create new playlist </h1>
        <form onSubmit={ this.handleSubmit } className="playlist-form-box">
          <h3>Playlist Name</h3>
          <input
            type="text"
            value={ this.state.playlistName }
            onChange={ this.updateName }
            className="playlist-input"
          />
          <br/>
          <input className="playlist-submit" type="submit" value="create" />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
