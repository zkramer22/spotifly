import React from 'react';
// import { Link } from 'react-router-dom';

const Topbar = ({ openModal }) => {
  const topLinks = () => (
      <nav className="topbar">
        {
          // <Link to="/collection/playlists">PLAYLIST</Link>
          // <Link to="/collection/artists">ARTIST</Link>
          // <Link to="/collection/albums">ALBUMS</Link>
          // <Link to="/collection/tracks">TRACKS</Link>
        }
        <div className="new-playlist-button-container">
          <button
            className="new-playlist-button"
            onClick={ () => openModal('create') }>NEW PLAYLIST
          </button>
        </div>
      </nav>
  );
// add modal to button above

  return (
    topLinks()
  );
};

export default Topbar;
