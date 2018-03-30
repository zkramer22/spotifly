import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import TrackIndex from '../tracks/track_index';
import Topbar from '../bars/topbar';

class PlaylistDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId);
  }

  render() {
    const { playlist, tracks, openModal, trackIndexType } = this.props;
    const modalType = "delete";

    return (
      <div className="BLACKround">
        <div className="index-flexbox random-gradient">
          <div className="left-spacing">
            <Topbar openModal={ openModal } modalType={ modalType } />

            <section className="playlist-detail-container">
              <div className="playlist-detail-info">
                <img
                  className="playlist-index-item-coverart"
                  src="https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/mqlimq5ifprz3klcoxpt/spotify-logo"
                  alt="meh" />
                <h2>{ playlist.name }</h2>
                <h4 style={{ fontWeight:"200", color: "lightgrey"}}>
                  { playlist.email_address }
                </h4>
              </div>

              <div className="playlist-detail-tracks">
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
