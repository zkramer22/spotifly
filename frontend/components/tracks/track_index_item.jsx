import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import {
  putTrackInState,
  removeTrackFromPlaylist
} from '../../actions/playlist_actions';
import { receiveCurrentTrack } from '../../actions/track_actions';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      canPlay: false
    }
    this.togglePlay = this.togglePlay.bind(this);
  }

// this will actually be in Playbar component. This component's methods
// should simply set the currentTrack and send that to Playbar.

  togglePlay() {
    if (this.state.playing) {
      this.audio.pause();
      this.setState({ playing: false })
    } else if (this.state.canPlay) {
      this.audio.play();
      this.setState({ playing: true })
    }
  }

  render() {
    const { removeTrackFromPlaylist, putTrackInState, openModal, type, track, num } = this.props;
    let addButton;
    if (type === "search") {
      addButton = (
        <div className="add-button-icon"
          onClick={ () => {
            openModal();
            putTrackInState();
          }}>
          <i className="fa fa-plus"></i>
        </div>
      );
    } else {
      addButton = (
        <div className="delete-button-icon"
          onClick={ () => {
            removeTrackFromPlaylist();
          }}>
          <i className="fa fa-times"></i>
        </div>
      );
    }

    return (
      <div className="track-index-highlight">
        {
          this.state.playing ?
          <i class="fa fa-pause" onClick={this.togglePlay}></i> :
          <i className="fa fa-play" onClick={this.togglePlay}></i>
        }

        <audio src={ track.trackUrl } ref={tag => this.audio = tag } onCanPlayThrough={() => this.setState({canPlay: true})}>
        </audio>

        <div className="track-number-button">
          { num + 1 }
        </div>

        <div className="track-info-group">
          <span className="track-name">{ track.name }</span><br/>
          <span className="track-artist-name">{ track.artist }</span><span>{" • "}</span>
          <span className="track-album-name">{ track.album }</span>
        </div>

        <div className="add-to-playlist-button">
          { addButton }
        </div>
      </div>
    );
  }
}

const mdp = (dispatch, ownProps) => {
  return {
    receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
    removeTrackFromPlaylist: () => dispatch(removeTrackFromPlaylist(ownProps.track.id, ownProps.playlistId)),
    openModal: () => dispatch(openModal('add')),
    putTrackInState: () => dispatch(putTrackInState(ownProps.track.id))
  };
};

export default connect(null, mdp)(TrackIndexItem);
