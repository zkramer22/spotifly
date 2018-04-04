import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.removeCurrentTrack();
    this.props.logout();
    setTimeout(() => this.props.history.push("/"), 100);
  }

  render() {
    const { currentUser, loggedIn } = this.props;

    if (!loggedIn) { return null }

    return (
      <div className="sidebar">
        <br/>
        <img
          id="spotiFLY-logo"
          className="sidebar-logo"
          src="https://www.clipartqueen.com/image-files/bird-flight-silhouette.png"
          style={{marginBottom: "10px"}}/>

        <div className="sidebar-link-container">
          <Link to="/searches">
            <span style={{ marginRight: "140px" }}>Search</span>
            <i className="fa fa-search"></i>
          </Link>
        </div>

        <div className="sidebar-link-container">
          <Link to="/collection/playlists">
            <span style={{ marginRight: "110px" }}>Your Music</span>
            <i className="fa fa-headphones"></i>
          </Link>
        </div>

        <div id="personal-info">
          built with &hearts; by zach kramer
        </div>

        <div class="links">
          <div class="link-container">
            <a href="https://www.github.com/zkramer22">
              <img id="github" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
            </a>
          </div>
          <div class="link-container">
            <a href="https://www.linkedin.com/in/zkramer22">
              <img id="linkedin" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" />
            </a>
          </div>
          <div>
            <a href="mailto:zkramer22@gmail.com">
              <img id="mailto" src="https://www.shareicon.net/data/2015/12/02/681171_email_512x512.png"/>
            </a>
          </div>
        </div>

        <div className="sidebar-link-container user-logout">
          <span style={{ marginRight: "105px" }}>
            { currentUser.email_address }
          </span>
          <button
            className="logout-button"
            onClick={ this.handleLogout }>LOGOUT
          </button>
        </div>

      </div>
    );
  }
}

export default withRouter(Sidebar);
