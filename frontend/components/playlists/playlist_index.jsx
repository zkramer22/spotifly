import React from 'react';

import PlaylistIndexItem from './playlist_index_item';
import Topbar from '../bars/topbar';
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
          <div className="left-spacing">
            <Topbar openModal={ openModal } modalType="create"/>
            <section className="playlist-index-container">
              <div className="playlist-index">
                { playlists.map(playlist => <PlaylistIndexItem key={ playlist.id } playlist={ playlist } />) }
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
};

export default PlaylistIndex;
