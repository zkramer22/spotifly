import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { currentUser } = this.props;

    return (
      <div className="sidebar">
        <img
          className="sidebar-logo"
          src="https://www.numerama.com/content/uploads/2016/01/spotify.png"
          style={{marginBottom: "10px"}}/>

        <div className="sidebar-link-container">
          <Link
            ref="search-link"
            to="/search"
            className="">
            <span style={{ marginRight: "140px" }}>Search</span>
            <i className="fa fa-search"></i>
          </Link>
        </div>

        <div className="sidebar-link-container">
          <Link to="/collection/playlists">Your Music</Link>
        </div>

      </div>
    );
  }
}

export default withRouter(Sidebar);
