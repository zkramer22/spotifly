import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <footer className="playbar">

          <div className="now-playing-container">
            <div className="now-playing-artwork">
              <img
                src="https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/mqlimq5ifprz3klcoxpt/spotify-logo"
                alt="meh" />
            </div>

            <div className="now-playing-info">
              <div className="now-playing-track">Some Track Name</div>
              <div className="now-playing-artist">Artistperson</div>
            </div>

            <div className="now-playing-add-button-container">              
              <div className="now-playing-add-button">
                <i className="fa fa-plus"></i>
              </div>
            </div>
          </div>

          <div className="audio-container">
            <audio controls>

            </audio>
          </div>

          <div className="extra-controls">
            <i className="fa fa-list-ul"></i>
            <i class="fa fa-desktop"></i>
            <i class="fa fa-volume-up"></i>
          </div>

      </footer>
    );
  }

}

const msp = state => {
  return {

  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(Playbar);
