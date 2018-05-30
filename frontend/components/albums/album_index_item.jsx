import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({ album }) => {

  return (
    <div className="album-index-item-container">
      <Link
        className="album-index-item"
        to={ `/albums/${album.id}` }>
        <div className="album-artwork">
          <img src={ album.artwork }/>
        </div>
        <span style={{ padding: "5px 0 2.5px 0" }}>
          { album.name }
        </span>
      </Link>
      <Link
        className="album-artist-link"
        to={ `/artists/${album.artist_id}` }>
        <span>{ album.artistName }</span>
      </Link>
    </div>
  );
};

export default AlbumIndexItem;
