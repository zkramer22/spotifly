import React from 'react';

// TODO: heres the play icon <i class="fas fa-play"></i>

const TrackIndexItem = ({ track, i }) => {
  return (
    <div className="track-index-highlight">
      <span className="track-number-button">{ i + 1 }</span>
      <span className="track-name">{ track.name }</span><br/>
      <span className="track-artist-name">{ track.artist }</span><span>{" • "}</span>
      <span className="track-album-name">{ track.album }</span>
    </div>
  );
};

export default TrackIndexItem;
