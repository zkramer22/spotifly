import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexItem from './playlist_index_item';
import TrackIndex from '../tracks/track_index';
import Topbar from '../bars/topbar';

class PlaylistDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { playlist, tracks, openModal, trackIndexType } = this.props;

    let emptyMessage;
    if (tracks.length === 0) {
      emptyMessage = (
        <div className="empty-message-container">
          <h3>
            No songs here yet. Head over to <Link to="/searches">Search</Link> to get started!
          </h3>
        </div>
      );
    }

    const modalType = "delete";
    const artworks = playlist.album_artworks;
    let artworkGroup;

    if (artworks === undefined || artworks.length < 1) {
      artworkGroup = (
        <div className="artwork-single-detail">
          <i class="material-icons">library_music</i>
        </div>
      );
    } else if (artworks.length >= 4) {
      artworkGroup = (
        <div className="artwork-conglomerate-detail">
          <img src={ `${artworks.slice(0, 1)}` } />
          <img src={ `${artworks.slice(1, 2)}` } />
          <img src={ `${artworks.slice(2, 3)}` } />
          <img src={ `${artworks.slice(3, 4)}` } />
        </div>
      );
    } else {
      artworkGroup = (
        <div className="artwork-single-detail">
          <img src={ `${artworks.slice(0, 1)}` } />
        </div>
      );
    }

    return (
      <div className="BLACKround">
        <div className="index-flexbox random-gradient">
          <div className="left-spacing">
            <Topbar openModal={ openModal } modalType={ modalType } />

            <section className="playlist-detail-container">
              <div className="playlist-detail-info">
                { artworkGroup }
                <h2>{ playlist.name }</h2>
                <h4 style={{ fontWeight:"200", color: "lightgrey"}}>
                  { playlist.email_address }
                </h4>
              </div>

              <div className="playlist-detail-tracks">
                { emptyMessage }
                <TrackIndex
                  openModal={ openModal }
                  playlistId={ this.props.match.params.playlistId }
                  type={ trackIndexType }
                  tracks={ tracks }/>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;

// componentWillReceiveProps(nextProps) {
//   if (this.props.match.params.playlistId !== nextProps.match.params.playlistId) {
//     this.props.requestSinglePlaylist(this.props.match.params.playlistId)
//   }
// }
