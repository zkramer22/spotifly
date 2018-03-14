import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => {
  return (
    <div className="playlist-index-item-container">
      <Link
        className="playlist-index-item"
        to={`/collection/playlists/${playlist.id}`}>
        {/* <img src={ playlist.image } alt={ playlist.name }/> */}
          <img
            src="https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/mqlimq5ifprz3klcoxpt/spotify-logo"
            alt="meh" />
          <div className="playlist-shadow-box">
          </div>
        <span style={{padding: "5px 0 2.5px 0"}}>{ playlist.name }</span>
      </Link>
      <span style={{ fontWeight:"200", color: "lightgrey"}}>{ playlist.email_address }</span>
    </div>
  );
};

export default PlaylistIndexItem;
