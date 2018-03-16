import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { receiveCurrentTrack, pauseCurrentTrack } from '../../actions/track_actions';
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

  componentDidMount() {
    if (this.props.currentTrack.playing) {
      if (this.props.track.id === this.props.currentTrack.id) {
        this.setState({ playing: true });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.track.id !== nextProps.currentTrack.id) {
      this.setState({ playing: false });
    }

    // if (this.props.track.id === nextProps.currentTrack.id) {
    //
    // }

    if (nextProps.currentTrack.playing === false) {
      this.setState({ playing: false });
    }

    if (nextProps.currentTrack.playing === true) {
      if (nextProps.currentTrack.id === this.props.track.id) {
        this.setState({ playing: true });
      }
    }
  }

  togglePlay(trackId) {
    if (this.state.playing) {
      this.props.pauseCurrentTrack();
      this.setState({ playing: false })
    } else {
      this.props.receiveCurrentTrack(trackId);
      this.setState({ playing: true });
    }
  }

  render() {
    const { removeTrackFromPlaylist, putTrackInState, openModal,
            type, track, num } = this.props;

    let addOrDeleteButton;
    if (type === "search") {
      addOrDeleteButton = (
        <div className="add-or-delete-button-container">
          <div className="add-button-icon"
            onClick={ () => {
              openModal();
              putTrackInState();
            }}>
            <i className="material-icons">add</i>
          </div>
        </div>
      );
    } else if (type === "playlist") {
      addOrDeleteButton = (
        <div className="add-or-delete-button-container">
          <div className="delete-button-icon"
            onClick={ () => {
              removeTrackFromPlaylist();
            }}>
            <i id="index-delete" className="material-icons">close</i>
          </div>
        </div>
      );
    }

    return (
      <div className="track-index-highlight">
        {
          this.state.playing ?
          <div>
            <i id="index-pause" className="material-icons" onClick={() => {
                this.togglePlay(track.id)
              }}>pause
            </i>
          </div>
          :
          <div>
            <i id="index-play" className="material-icons" onClick={() => {
                this.togglePlay(track.id)
              }}>play_arrow
            </i>
          </div>
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
          { addOrDeleteButton }
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
    pauseCurrentTrack: () => dispatch(pauseCurrentTrack()),
    receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
    removeTrackFromPlaylist: () => dispatch(removeTrackFromPlaylist(ownProps.track.id, ownProps.playlistId)),
    openModal: () => dispatch(openModal('add')),
    putTrackInState: () => dispatch(putTrackInState(ownProps.track.id))
  };
};

export default connect(msp, mdp)(TrackIndexItem);
