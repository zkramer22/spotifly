import React from 'react';

import PlaylistIndexItem from './playlist_index_item';
import Topbar from '../topbar';
import { openModal } from "../../actions/modal_actions";

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPlaylists();
  }

  render() {
    const { playlists, openModal } = this.props;
    return (
      <div className="BLACKround">
        <div className="playlist-index-flexbox">
          <section className="playlist-index-container">
            <div className="playlist-index">
              { playlists.map(playlist => <PlaylistIndexItem key={ playlist.id } playlist={ playlist } />) }
            </div>
          </section>
          <Topbar openModal={ openModal }/>
        </div>
      </div>
    );
  }
};

export default PlaylistIndex;
