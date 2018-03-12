import React from 'react';
// import { Link } from 'react-router-dom';

const Topbar = ({ openModal, modalType }) => {
  if (modalType === "create") {
    return (
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
    return (
      <nav className="topbar">
        <div className="new-playlist-button-container">
          <button
            className="delete-playlist-button"
            onClick={ () => openModal('delete') }>DELETE PLAYLIST
          </button>
        </div>
      </nav>
    );
  }
};

export default Topbar;
