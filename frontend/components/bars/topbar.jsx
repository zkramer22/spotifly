import React from 'react';
// import { Link } from 'react-router-dom';

const Topbar = ({ openModal, modalType }) => {
  let topBar;

  if (modalType === "create") {
    topBar = (
      <nav className="topbar">
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
            <i class="material-icons">arrow_back</i>
            <i class="material-icons">arrow_forward</i>
          </div>

          <div className="new-playlist-button-container">
            <button
              className="delete-playlist-button"
              onClick={ () => openModal('delete') }>DELETE PLAYLIST
            </button>
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
