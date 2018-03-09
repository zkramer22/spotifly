import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => {
  return (
    <li className="playlist-index-item">
      <Link to={`/collection/playlists/${playlist.id}`}>
        {/* <img src={ playlist.image } alt={ playlist.name }/> */}
        <img
          style={{height: "100px", width: "100px"}}
          className="playlist-index-item-coverart"
          src="http://freevector.co/wp-content/uploads/2011/01/8710-spotify-logo-button1.png"
          alt="meh" />
        <span>{ playlist.name }</span>
        {/*<span>{ playlist.creator.email_address }</span>*/}
      </Link>
    </li>
  );
};

export default PlaylistIndexItem;
