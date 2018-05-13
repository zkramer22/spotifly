import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {

  return (
    <div className="artist-index-item-container">
      <Link
        className="artist-index-item"
        to={ `/artists/${artist.id}` }>
        <div className="artist-photo">
          <img src={ artist.cover_photo }/>
          {/*
            <img src={ window.logo } />
          */}
        </div>
        <span style={{ padding: "5px 0 2.5px 0" }}>{ artist.name }</span>
      </Link>
    </div>
  );
};

export default ArtistIndexItem;
