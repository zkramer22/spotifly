import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  receiveCurrentTrack,
  pauseCurrentTrack
} from '../../actions/track_actions';


class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.setVolume = this.setVolume.bind(this);
    this.changeTime = this.changeTime.bind(this);
    // this.setProgress = this.setProgress.bind(this);
    this.printProgress = this.printProgress.bind(this);
    this.printRemaining = this.printRemaining.bind(this);
    this.state = {
      progress: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTrack.playing) {
      this.audio.play();
    } else if (nextProps.currentTrack.playing === false) {
      this.audio.pause();
    }
  }

  setVolume(val) {
    const player = document.getElementById('playbar-audio');
    player.volume = val / 100;
  }

  // setProgress() {
  //   let progress = document.getElementById('progress-control');
  //   if (this.props.currentTrack.playing === true) {
  //     let time = setInterval(() => {
  //       progress.value = this.audio.currentTime / this.audio.duration;
  //     }, 100);
  //   } else if (this.props.currentTrack.playing === false) {
  //     return 0;
  //     clearInterval(time);
  //   }
  // }

  printProgress() {
    let currentTime = document.getElementById('current-time');
    let time = setInterval(() => {
      currentTime.value = String(Math.floor(this.audio.currentTime));
    }, 1000);
  }

  printRemaining() {
    let remainingTime = document.getElementById('remaining-time');
    let time = setInterval(() => {
      remainingTime.value = String(Math.floor(this.audio.duration - this.audio.currentTime));
    }, 1000);
  }

  changeTime() {
    this.setState({progress: this.audio.currentTime / this.audio.duration})
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
                    src="https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/mqlimq5ifprz3klcoxpt/spotify-logo"
                    alt="meh" />
                </div>

                <div className="now-playing-info">
                  <div className="now-playing-track">{ trackInfo.name }</div>
                  <div className="now-playing-artist">{ trackInfo.artist}</div>
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
                <i id="prev-track"className="material-icons">skip_previous</i>
              </div>

              <div className="play-pause-container">
                {
                  currentTrack.playing ?
                  <i id="pause-circle"
                    className="material-icons"
                    onClick={() => pauseCurrentTrack()}>pause_circle_outline</i>
                  :
                  <i id="play-circle"
                    className="material-icons"
                    onClick={() => receiveCurrentTrack(currentTrack.id)}>play_circle_outline</i>
                }
              </div>

              <div className="skip-track-container">
                <i id="next-track"className="material-icons">skip_next</i>
              </div>
            </div>

            <div className="playbar-control-bar">
              {
                currentTrack.id ? (
                  <div className="progress-bar">
                    <input id="current-time" type="text" value={ Math.floor(this.audio.currentTime) } />
                    <progress id="progress-control" max="1" value={ this.state.progress }></progress>
                    <input id="remaining-time" type="text" value={ Math.floor(this.audio.duration - this.audio.currentTime) } />
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
              ref={tag => this.audio = tag }
              onTimeUpdate={this.changeTime}>

            </audio>
          </div>
        </div>

        <div className="playbar-right">
          <div className="extra-controls">
            <i id="queue" className="material-icons">playlist_play</i>
            <i id="device" className="material-icons">speaker</i>
            <i id="volume" className="material-icons">volume_up</i>

            <input id="volume-control" type="range"
              min="0" max="100" step="1"
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
    currentTrack: state.ui.currentTrack
  };
};

const mdp = dispatch => {
  return {
    pauseCurrentTrack: () => dispatch(pauseCurrentTrack()),
    receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId))
  };
};

export default connect(msp, mdp)(Playbar);


//
// <div class="meter orange nostripes">
//   <span style={{ width: "33.3%" }}></span>
// </div>
// <pre><code>&lt;div class=&quot;meter orange nostripes&quot;&gt;
// &lt;span style=&quot;width: 33.3%&quot;&gt;&lt;/span&gt;
// &lt;/div&gt;</code></pre>
