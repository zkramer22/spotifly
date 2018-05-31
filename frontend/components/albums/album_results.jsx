import React from 'react';

import AlbumIndexItem from './album_index_item';

class AlbumResults extends React.Component {

  render() {

    const { albums } = this.props;

    return (
      <ol className="album-results">
        { Object.values(albums).map((album, i) => {
            return (
              <AlbumIndexItem album={ album } key={ i } />
            );
          })
        }
      </ol>
    );
  }

}

export default AlbumResults;
