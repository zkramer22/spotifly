import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => {

  return (
    <div className="artist-index-item-container">
      <Link
        className="artist-index-item"
        to={ `collection/artists/${artist.id}` }>
        <span style={{ padding: "5px 0 2.5px 0" }}>{ artist.name }</span>
      </Link>
    </div>
  );

};
