import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {

  return (
    <div className="artist-index-item-container">
      <Link
        className="artist-index-item"
        to={ `/artists/${artist.id}` }>
        <div className="artist-photo">
          <img src={ window.logo } />
          {/*<img src={ artist.artist_photo }/> */}
        </div>
        <span style={{ padding: "5px 0 2.5px 0" }}>{ artist.name }</span>
      </Link>
    </div>
  );
};

export default ArtistIndexItem;
