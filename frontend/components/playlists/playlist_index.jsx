import React from 'react';

import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPlaylists();
  }

  render() {
    const { playlists } = this.props;
    return (
      <section>
        <ul>
          { playlists.map(playlist => <PlaylistIndexItem key={ playlist.id } playlist={ playlist } />) }
        </ul>
      </section>
    );
  }
};

export default PlaylistIndex;
