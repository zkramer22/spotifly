import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => {
  const artworks = playlist.album_artworks;

  let artworkGroup;

  if (artworks.length < 1) {
    artworkGroup = (
      <div id="empty-playlist-eighthnote">
        <i className="material-icons">library_music</i>
      </div>
    );
  } else if (artworks.length >= 4) {
    artworkGroup = (
      <div className="artwork-conglomerate">
        <img src={ `${artworks.slice(0, 1)}` } />
        <img src={ `${artworks.slice(1, 2)}` } />
        <img src={ `${artworks.slice(2, 3)}` } />
        <img src={ `${artworks.slice(3, 4)}` } />
      </div>
    );
  } else {
    artworkGroup = (
      <div className="artwork-single">
        <img src={ `${artworks.slice(0, 1)}` } />
      </div>
    );
  }

  return (
    <div className="playlist-index-item-container">
      <Link
        className="playlist-index-item"
        to={`/collection/playlists/${playlist.id}`}>
          { artworkGroup }
        <span style={{ padding: "5px 0 2.5px 0" }}>{ playlist.name }</span>
      </Link>
      <span style={{ fontWeight:"200", color: "lightgrey"}}>{ playlist.email_address }</span>
    </div>
  );
};

export default PlaylistIndexItem;
