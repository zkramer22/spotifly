import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ openModal, modalType }) => {
  let topBar;

  if (modalType === "create") {
    topBar = (
      <nav className="topbar">
        <div className="nav-arrows">
          <i onClick={ () => window.history.back() } className="material-icons">arrow_back</i>
          <i onClick={ () => window.history.forward() } className="material-icons">arrow_forward</i>
        </div>

        <div className="collection-nav">
          <Link to="/collection/playlists">
            PLAYLISTS
          </Link>
          <Link to="/collection/artists">
            ARTISTS
          </Link>
          {/*
            <Link to="/collection/albums">
            ALBUMS
            </Link>
            <Link to="/collection/tracks">
            TRACKS
            </Link>
        */}
        </div>

        <div className="new-playlist-button-container">
          <button
            className="new-playlist-button"
            onClick={ () => openModal('create') }>NEW PLAYLIST
          </button>
        </div>
      </nav>
    );
  } else if (modalType === "delete") {
      topBar = (
        <nav className="topbar">
          <div className="nav-arrows">
            <i onClick={ () => window.history.back() } className="material-icons">arrow_back</i>
            <i onClick={ () => window.history.forward() } className="material-icons">arrow_forward</i>
          </div>

          <div className="new-playlist-button-container">
            <button
              className="delete-playlist-button"
              onClick={ () => openModal('delete') }>DELETE PLAYLIST
            </button>
          </div>
        </nav>
    );
  } else {
      topBar = (
        <nav className="topbar">
          <div className="nav-arrows">
            <i onClick={ () => window.history.back() } className="material-icons">arrow_back</i>
            <i onClick={ () => window.history.forward() } className="material-icons">arrow_forward</i>
          </div>

          <div style={{ height: '38px'}}>
          </div>
        </nav>
      );
  }

  return (
    <div>
      { topBar }
    </div>
  );
};

export default Topbar;
