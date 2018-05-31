import React from 'react';

import ArtistIndexItem from './artist_index_item';

class ArtistResults extends React.Component {

  render() {

    const { artists } = this.props;

    return (
      <ol className="artist-results">
        { Object.values(artists).map((artist, i) => {
            return (
              <ArtistIndexItem artist={ artist } key={ i } />
            );
          })
        }
      </ol>
    );
  }

}

export default ArtistResults;
