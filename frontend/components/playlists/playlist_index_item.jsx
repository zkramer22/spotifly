import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => {
  const artworks = playlist.album_artworks;

  const artworkGroup = artworks.length >= 4 ? (
    <div className="artwork-conglomerate">
      <img src={ `${artworks.slice(0, 1)}` } alt="https://www.clipartqueen.com/image-files/bird-flight-silhouette.png"/>
      <img src={ `${artworks.slice(1, 2)}` } alt="https://www.clipartqueen.com/image-files/bird-flight-silhouette.png"/>
      <img src={ `${artworks.slice(2, 3)}` } alt="https://www.clipartqueen.com/image-files/bird-flight-silhouette.png"/>
      <img src={ `${artworks.slice(3, 4)}` } alt="https://www.clipartqueen.com/image-files/bird-flight-silhouette.png"/>
    </div>
  ) : (
    <div className="artwork-single">
      <img src={ `${artworks.slice(0, 1)}` } alt="https://www.clipartqueen.com/image-files/bird-flight-silhouette.png" />
    </div>
  );

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
