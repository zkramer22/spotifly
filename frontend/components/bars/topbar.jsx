import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ openModal, modalType, search }) => {
  // debugger
  let topBar;

  if (modalType === "create") {
    topBar = (
      <nav className="topbar">
        <div className="nav-arrows">
          <i onClick={ () => window.history.back() }
            className="material-icons">arrow_back</i>
          <i onClick={ () => window.history.forward() }
            className="material-icons">arrow_forward</i>
        </div>

        <div className="collection-nav">
          <Link className="collection-nav-link" to="/collection/playlists">
            PLAYLISTS
          </Link>
          <Link className="collection-nav-link" to="/collection/artists">
            ARTISTS
          </Link>
          <Link className="collection-nav-link" to="/collection/albums">
            ALBUMS
          </Link>
        {/*
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
            <i onClick={ () => window.history.back() }
              className="material-icons">arrow_back</i>
            <i onClick={ () => window.history.forward() }
              className="material-icons">arrow_forward</i>
          </div>

          <div className="new-playlist-button-container">
            <button
              className="delete-playlist-button"
              onClick={ () => openModal('delete') }>DELETE PLAYLIST
            </button>
          </div>
        </nav>
    );
  } else if (search === "true") {
    topBar = (
      <nav className="search-nav">
        <div className="nav-arrows">
          <i onClick={ () => window.history.back() }
            className="material-icons">arrow_back</i>
          <i onClick={ () => window.history.forward() }
            className="material-icons">arrow_forward</i>
        </div>

        <div className="search-nav-container">
          <Link className="search-nav-link" to="/searches/tracks">
            TRACKS
          </Link>
          <Link className="search-nav-link" to="/searches/artists">
            ARTISTS
          </Link>
          <Link className="search-nav-link" to="/searches/albums">
            ALBUMS
          </Link>
        </div>

        <div style={{ height: '38px', width: '50px' }}>
        </div>
      </nav>
    );
  } else {
      topBar = (
        <nav className="topbar">
          <div className="nav-arrows">
            <i onClick={ () => window.history.back() }
              className="material-icons">arrow_back</i>
            <i onClick={ () => window.history.forward() }
              className="material-icons">arrow_forward</i>
          </div>

          <div style={{ height: '38px', width: '50px' }}>
          </div>
        </nav>
      );
  }

  const path = window.location.href.split('#/')[1].split('/');
  let active;

  if (path[0] === 'collection') {
    $('.collection-nav-link').removeClass('active-nav');
    switch (path[1]) {
      case 'playlists':
        active = $('.collection-nav-link')[0];
        $(active).addClass('active-nav');
        break;
      case 'artists':
        active = $('.collection-nav-link')[1];
        $(active).addClass('active-nav');
        break;
      case 'albums':
        active = $('.collection-nav-link')[2];
        $(active).addClass('active-nav');
        break;
      default:
        break;
    }
  } else if (path[0] === 'searches') {
    $('.search-nav-link').removeClass('active-nav');
    switch (path[1]) {
      case 'tracks':
        active = $('.search-nav-link')[0];
        $(active).addClass('active-nav');
        break;
      case 'artists':
        active = $('.search-nav-link')[1];
        $(active).addClass('active-nav');
        break;
      case 'albums':
        active = $('.search-nav-link')[2];
        $(active).addClass('active-nav');
        break;
      default:
        break;
    }
  }

  return (
    <div>
      { topBar }
    </div>
  );
};

export default Topbar;
