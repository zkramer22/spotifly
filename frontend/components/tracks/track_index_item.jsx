import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { receiveCurrentTrack } from '../../actions/track_actions';
import {
  putTrackInState,
  removeTrackFromPlaylist
} from '../../actions/playlist_actions';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.track.id !== nextProps.currentTrack) {
      this.setState({ playing: false });
    }
  }

  togglePlay(trackId) {
    if (this.state.playing) {
      this.setState({ playing: false })
    } else {
      this.props.receiveCurrentTrack(trackId);
      this.setState({ playing: true });
    }
  }

  render() {
    const { removeTrackFromPlaylist,
      putTrackInState,
      openModal,
      type, track, num } = this.props;

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
          <i className="fa fa-pause" onClick={() => {
              this.togglePlay(track.id)
            }}>
          </i>
          :
          <i className="fa fa-play" onClick={() => {
              this.togglePlay(track.id)
            }}>
          </i>
        }

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

const msp = state => {
  return {
    currentTrack: state.ui.currentTrack || {}
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    removeCurrentTrack: () => dispatch(removeCurrentTrack()),
    receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
    removeTrackFromPlaylist: () => dispatch(removeTrackFromPlaylist(ownProps.track.id, ownProps.playlistId)),
    openModal: () => dispatch(openModal('add')),
    putTrackInState: () => dispatch(putTrackInState(ownProps.track.id))
  };
};

export default connect(msp, mdp)(TrackIndexItem);
