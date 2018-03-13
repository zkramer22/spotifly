import React from 'react';

import TrackIndexItem from '../tracks/track_index_item';

const TrackIndex = ({ tracks }) => {
  return (
    <ol className="playlist-tracklist">
      { Object.values(tracks).map((track, i) => {
        return <TrackIndexItem key={ track.id } track={ track } i={i} />;
      }) }
    </ol>
  );
};

export default TrackIndex;
