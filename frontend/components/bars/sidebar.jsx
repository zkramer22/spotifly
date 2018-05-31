import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleLogout = this.handleLogout.bind(this);
    this.activePage = this.activePage.bind(this);
  }

  componentDidMount() {
    this.props.requestToto();
  }

  componentWillReceiveProps(nextProps) {
    const path = this.props.history.location.pathname;
    if (path.slice(0, 10) === '/searches/') {
      this.activePage(0);
    } else if (path.slice(0, 12) === '/collection/') {
      console.log('not search');
      this.activePage(1);
    } else {
      this.activePage(-1);
    }
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.removeCurrentTrack();
    this.props.logout();
    setTimeout(() => this.props.history.push("/"), 100);
  }

  activePage(num) {
    const active = $('.sidebar-link')[num];
    $('.sidebar-link').removeClass('active-page');
    $(active).addClass('active-page');
  }

  render() {
    const { currentUser, loggedIn, receiveCurrentTrack } = this.props;

    if (!loggedIn) { return null }

    const path = this.props.history.location.pathname;

    if (path.slice(0, 10) === '/searches/') {
      setTimeout(() => {
        this.activePage(0);
      }, 0);
    } else if (path.slice(0, 12) === '/collection/') {
      this.activePage(1);
    } else {
      setTimeout(() => {
        console.log('wut');
        this.activePage(-1);
      }, 0);
    }

    return (
      <div className="sidebar">
        <br/>
        <img
          id="spotiFLY-logo"
          className="sidebar-logo"
          src={ window.logo }
          style={{marginBottom: "10px"}}/>

        <div className="sidebar-link-container">
          <Link className="sidebar-link" to="/searches/tracks"
                onClick={ () => this.activePage(0) }>
            <span style={{ marginRight: "140px" }}>Search</span>
            <i className="material-icons">search</i>
          </Link>
        </div>

        <div className="sidebar-link-container">
          <Link className="sidebar-link" to="/collection/playlists"
                onClick={ () => this.activePage(1) }>
            <span style={{ marginRight: "97px" }}>Your Library</span>
            <i className="material-icons">library_books</i>
          </Link>
        </div>

        <div id="personal-info">
          built with &nbsp;
          <strong onClick={ () => receiveCurrentTrack() }>
            &hearts;
          </strong>
           &nbsp; by zach kramer
        </div>

        <div className="links">
          <div className="link-container">
            <a href="https://www.github.com/zkramer22">
              <img id="github" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
            </a>
          </div>
          <div className="link-container">
            <a href="https://www.linkedin.com/in/zkramer22">
              <img id="linkedin" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" />
            </a>
          </div>
          <div className="link-container">
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
