import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectTrackList, getTrackList } from '../../reducers/selectors';
import {
  receiveCurrentTrack,
  pauseCurrentTrack,
  removeCurrentTrack
} from '../../actions/track_actions';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.setVolume = this.setVolume.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.printTime = this.printTime.bind(this);
    this.seekProgress = this.seekProgress.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.playButton = this.playButton.bind(this);

    this.state = { progress: 0, lastVolume: 50 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTrack.playing) {
      this.audio.play();
    } else if (nextProps.currentTrack.playing === false) {
      this.audio.pause();
    }
  }

  setVolume(val) {
    this.audio.volume = val / 100;
  }

  toggleMute() {
    if (this.audio.volume > 0) {
      this.setState( { lastVolume: this.audio.volume });
      this.audio.volume = 0;
    } else {
      this.audio.volume = this.state.lastVolume;
    }
  }

  printTime(time) {
    if (isNaN(this.audio.duration)) {
      return "-:--";
    }
    let rounded = Math.floor(time);
    let minutes = Math.floor(rounded / 60);
    let seconds = Math.floor(rounded % 60);
    seconds >= 10 ? seconds = seconds : seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  updateProgress() {
    this.setState({ progress: this.audio.currentTime / this.audio.duration })
  }

  seekProgress(pos, offset, width) {
    const clickedVal = (pos - offset) / width;
    this.audio.currentTime = this.audio.duration * clickedVal;
  }

  nextTrack(currentTrackId) {
    const trackList = this.props.trackList;
    const nextIndex = trackList.indexOf(currentTrackId) + 1;

    if (trackList.length === 0) {
      return;
    } else if (nextIndex >= trackList.length) {
      this.audio.pause();
      this.props.removeCurrentTrack();
    } else {
      this.props.receiveCurrentTrack(trackList[nextIndex]);
    }
  }

  prevTrack(currentTrackId) {
    if (this.audio.currentTime >= 3) { this.audio.currentTime = 0; return }
    const trackList = this.props.trackList;
    const prevIndex = trackList.indexOf(currentTrackId) - 1;

    if (prevIndex < 0) { return }

    this.props.receiveCurrentTrack(trackList[prevIndex]);
  }

  playButton(currentTrackId) {
    if (currentTrackId === undefined) {
      return;
    } else {
      this.props.receiveCurrentTrack(currentTrackId);
    }
  }

  render() {
    const { trackInfo, currentTrack, loggedIn,
      pauseCurrentTrack, receiveCurrentTrack } = this.props;

    if (!loggedIn) { return null }

    return (
      <footer className="playbar">

        <div className="playbar-left">
          {
            currentTrack.id ? (
              <div className="now-playing-container">
                <div className="now-playing-artwork">
                  <img
                    src={ trackInfo.artwork }
                    alt="meh" />
                </div>

                <div className="now-playing-info">
                  <div className="now-playing-track">{ trackInfo.name }</div>
                  <Link to={ `/artists/${trackInfo.artistId}` }>
                    <div className="now-playing-artist">{ trackInfo.artist}</div>
                  </Link>
                </div>

                <div className="now-playing-add-button-container">
                  <div className="now-playing-add-button">
                    <i className="material-icons">add</i>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          }

        </div>

        <div className="playbar-center">
          <div className="playbar-controls">
            <div className="playbar-control-buttons">
              <div className="skip-track-container">
                <i id="prev-track" className="material-icons"
                  onClick={ () => this.prevTrack(currentTrack.id) }>skip_previous</i>
              </div>

              <div className="play-pause-container">
                {
                  currentTrack.playing ?
                  <i id="pause-circle"
                    className="material-icons"
                    onClick={ () => pauseCurrentTrack() }>pause_circle_outline</i>
                  :
                  <i id="play-circle"
                    className="material-icons"
                    onClick={ () => this.playButton(currentTrack.id) }>play_circle_outline</i>
                }
              </div>

              <div className="skip-track-container">
                <i id="next-track" className="material-icons"
                  onClick={ () => this.nextTrack(currentTrack.id) }>skip_next</i>
              </div>
            </div>

            <div className="playbar-control-bar">
              {
                currentTrack.id ? (
                  <div className="progress-bar">
                    <input id="elapsed-time" type="text" readOnly
                      value={ this.printTime(this.audio.currentTime) } />
                    <progress id="progress-control" max="1"
                      value={ this.state.progress || '' }
                      onClick={ (e) => this.seekProgress(
                        e.pageX,
                        e.currentTarget.offsetLeft,
                        e.currentTarget.offsetWidth)
                      }>
                    </progress>
                    <input id="remaining-time" type="text" readOnly
                      value={ this.printTime(this.audio.duration - this.audio.currentTime) } />
                  </div>
                ) : (
                  <div></div>
                )
              }
            </div>

            <audio
              autoPlay
              id="playbar-audio"
              src={ trackInfo.trackUrl }
              ref={ tag => this.audio = tag }
              onTimeUpdate={ this.updateProgress }
              volume={ this.state.volume }
              onEnded={ () => this.nextTrack(currentTrack.id) }>
            </audio>
          </div>
        </div>

        <div className="playbar-right">
          <div className="extra-controls">
            <i id="queue" className="material-icons">playlist_play</i>
            <i id="device" className="material-icons">speaker</i>
            <i id="volume" className="material-icons"
              onClick={ () => this.toggleMute() }>volume_up</i>

            <input id="volume-control" type="range"
              min="0" max="100" step="1"
              defaultValue="100"
              onInput={ (e) => this.setVolume(e.currentTarget.value) }
              onChange={ (e) => this.setVolume(e.currentTarget.value) }>
            </input>
          </div>
        </div>

      </footer>
    );
  }
}

const msp = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    trackInfo: state.entities.tracks[state.ui.currentTrack.id] || {},
    currentTrack: state.ui.currentTrack,
    trackList: getTrackList(state, state.ui.currentTrack) || {}
  };
};

const mdp = dispatch => {
  return {
    pauseCurrentTrack: () => dispatch(pauseCurrentTrack()),
    receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
    removeCurrentTrack: () => dispatch(removeCurrentTrack())
  };
};

export default connect(msp, mdp)(Playbar);
