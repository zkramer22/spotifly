import React from 'react';

import TrackIndexItem from '../tracks/track_index_item';

const TrackIndex = ({ tracks, type, openModal }) => {
  return (
    <ol className="playlist-tracklist">
      { Object.values(tracks).map((track, i) => {
        return (
          <TrackIndexItem
            key={i}
            type={ type }
            openModal={ openModal }
            track={ track } num={i} />
        );
      }) }
    </ol>
  );
};

export default TrackIndex;
