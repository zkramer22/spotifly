import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    this.activeTrack = this.activeTrack.bind(this);
  }

  componentDidMount() {
    if ((this.props.currentTrack.playing) &&
        (this.props.track.id === this.props.currentTrack.id)) {
        this.setState({ playing: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.track.id !== nextProps.currentTrack.id) {
      this.setState({ playing: false });
    }
    else if (nextProps.currentTrack.playing === false) {
      this.setState({ playing: false });
    }
    else if ((nextProps.currentTrack.id === this.props.track.id) /*&&
      (nextProps.currentTrack.playing === true)*/) {
        this.setState({ playing: true });
    }
  }

  togglePlay(trackId, playlistId) {
    if (this.state.playing) {
      this.props.pauseCurrentTrack();
      this.setState({ playing: false })
    } else {
      this.props.receiveCurrentTrack(trackId, playlistId);
      this.setState({ playing: true });
    }
  }

  activeTrack(trackId) {
    // console.log(`u clicked track ${trackId}`);
    // $(`.track-index-highlight-${trackId}`).addClass('active-track');
  }

  render() {
    const { removeTrackFromPlaylist, putTrackInState, openModal,
            type, track, num, playlistId } = this.props;
    let addOrDeleteButton;
    let trackInfoGroup;

    addOrDeleteButton = (type === "search" || type === "album" || type === "artist") ? (
      <div className="add-or-delete-button-container">
        <div className="add-button-icon"
          onClick={ () => {
            openModal();
            putTrackInState();
          }}>
          <i className="material-icons">add</i>
        </div>
      </div>
    ) : (
      <div className="add-or-delete-button-container">
        <div className="delete-button-icon"
          onClick={ () => {
            removeTrackFromPlaylist();
          }}>
          <i id="index-delete" className="material-icons">close</i>
        </div>
      </div>
    );

    trackInfoGroup = (type === "album" || type === "artist") ? (
      <div className="track-info-group">
        <span className="track-name">{ track.name }</span>
      </div>
    ) : (
      <div className="track-info-group">
        <span className="track-name">{ track.name }</span><br/>
        <Link to={ `/artists/${track.artistId}` }>
          <span className="track-artist-name">{ track.artist }</span>
        </Link>
        <span style={ {cursor: "default", WebkitUserSelect: "none" } }>{" • "}</span>
        <Link to={`/albums/${track.albumId}`}>
          <span className="track-album-name">{ track.album }</span>
        </Link>
      </div>
    );

    return (
      <div className={`track-index-highlight-${track.id}`} onClick={() => {
          this.activeTrack(track.id) }
          }>
        {
          this.state.playing ?
          <div className="index-button-container">
            <i id="index-pause" className="material-icons" onClick={() => {
                this.togglePlay(track.id, playlistId)
                }}>pause
            </i>
          </div>
          :
          <div className="index-button-container">
            <i id="index-play" className="material-icons" onClick={() => {
                this.togglePlay(track.id, playlistId)
              }}>play_arrow
            </i>
          </div>
        }

        <div className="track-number-button">
          { num + 1 }
        </div>

        { trackInfoGroup }

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
    receiveCurrentTrack: (trackId, playlistId) => dispatch(receiveCurrentTrack(trackId, playlistId)),
    removeTrackFromPlaylist: () => dispatch(removeTrackFromPlaylist(ownProps.track.id, ownProps.playlistId)),
    openModal: () => dispatch(openModal('add')),
    putTrackInState: () => dispatch(putTrackInState(ownProps.track.id))
  };
};

export default connect(msp, mdp)(TrackIndexItem);
