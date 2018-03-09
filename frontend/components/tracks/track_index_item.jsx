import React from 'react';

const TrackIndexItem = ({ track, i }) => {
  return (
    <div className="track-index-highlight">
      <span className="track-number-button">{ i + 1 }</span>
      <span className="track-index-item">{ track.name }</span>
    </div>
  );
};

export default TrackIndexItem;
