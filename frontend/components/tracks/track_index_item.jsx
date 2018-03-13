import React from 'react';
import { openModal } from '../../actions/modal_actions';
import { putTrackInState } from '../../actions/playlist_actions';
import { connect } from 'react-redux';

// TODO: heres the play icon --- <i class="fa fa-play"></i>
// pause icon --- <i class="fa fa-pause"></i>

const TrackIndexItem = ({ putTrackInState, openModal, type, track, num }) => {
  let addButton;
  if (type === "search") {
    addButton = (
      <button onClick={ () => {
          openModal();
          putTrackInState();
        }}>
        <i className="fa fa-plus"></i>
      </button>
    );
  } else {
    addButton = (
      <div></div>
    );
  }

  return (
    <div className="track-index-highlight">

      <div className="track-number-button">
        { num + 1 }
      </div>

      <div className="track-info-group">
        <span className="track-name">{ track.name }</span><br/>
        <span className="track-artist-name">{ track.artist }</span><span>{" • "}</span>
        <span className="track-album-name">{ track.album }</span>
      </div>

      <div className="add-to-playlist-button">
        { addButton }
      </div>
    </div>
  );
};

const mdp = (dispatch, ownProps) => {
  return {
    openModal: () => dispatch(openModal('add')),
    putTrackInState: () => dispatch(putTrackInState(ownProps.track.id))
  };
};

export default connect(null, mdp)(TrackIndexItem);
