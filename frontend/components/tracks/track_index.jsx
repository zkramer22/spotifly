import React from 'react';
import { connect } from 'react-redux';

import TrackIndexItem from '../tracks/track_index_item';

class TrackIndex extends React.Component {

  render() {
    const { playlistId, albumId, tracks, type, openModal } = this.props;

    return (
      <ol className="tracklist">
        { Object.values(tracks).map((track, i) => {
          return (
            <TrackIndexItem
              playlistId={ playlistId }
              albumId={ albumId }
              key={i}
              type={ type }
              openModal={ openModal }
              track={ track } num={i} />
          );
        }) }
      </ol>
    );
  }

}

export default TrackIndex;
