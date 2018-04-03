import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import {
  removeTrackFromState,
  requestAllPlaylists,
  addTrackToPlaylist } from '../../actions/playlist_actions';

class PlaylistAddTrack extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPlaylists();
  }

  successMessage() {
    // console.log("success");
  }

  handleSubmit(playlist) {
    return (e) => {
      e.preventDefault();
      this.props.addTrackToPlaylist(playlist.id).then(response => {
        // this.successMessage();
      });
      this.props.requestAllPlaylists();
    };
  }

  handleEnter(e) {
    const keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == '13') { null }
  }

  render() {
    const { playlists } = this.props;

    return (
      <div className="playlist-form-container">

        <div className="close-x-container">
          <span
            onClick={ this.props.closeModal }
            className="close-x">X</span>
        </div>

        <div className="playlist-form-wrapper">
          <h1>Add to playlist</h1>

          <div className="playlist-index add-track">
            { playlists.map((playlist, i) => {
              const artworks = playlist.album_artworks;

              let artworkGroup;

              if (artworks.length < 1) {
                artworkGroup = (
                  <div>
                    <img
                      style={{ backgroundColor: "white" }}
                      src="https://www.clipartqueen.com/image-files/bird-flight-silhouette.png" />
                  </div>
                );
              } else if (artworks.length >= 4) {
                artworkGroup = (
                  <div className="artwork-conglomerate">
                    <img src={ `${artworks.slice(0, 1)}` } />
                    <img src={ `${artworks.slice(1, 2)}` } />
                    <img src={ `${artworks.slice(2, 3)}` } />
                    <img src={ `${artworks.slice(3, 4)}` } />
                  </div>
                );
              } else {
                artworkGroup = (
                  <div className="artwork-single">
                    <img src={ `${artworks.slice(0, 1)}` } />
                  </div>
                );
              }

              return (
                <div
                  className="playlist-index-item-container"
                  key={i}
                  playlistid={ playlist.id }>
                  <div className="add-playlist-index-item">
                    { artworkGroup }
                      <span style={{padding: "5px 0 2.5px 0"}}>{ playlist.name }</span>
                  </div>
                </div>
              );
            }) }
          </div>

        </div>

      </div>
    );
  }
}

const msp = state => {
  return {
    playlists: Object.values(state.entities.playlists) || [],
  };
};

const mdp = dispatch => {
  return {
    requestAllPlaylists: () => dispatch(requestAllPlaylists()),
    addTrackToPlaylist: playlistId => dispatch(addTrackToPlaylist(playlistId)),
    closeModal: () => dispatch(closeModal()),
    removeTrackFromState: () => dispatch(removeTrackFromState())
  };
};

export default connect(msp, mdp)(PlaylistAddTrack);
