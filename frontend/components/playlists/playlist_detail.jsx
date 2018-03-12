import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import TrackIndexItem from '../tracks/track_index_item';
import Topbar from '../bars/topbar';

class PlaylistDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePlaylist(this.props.match.params.playlistId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.playlistId !== nextProps.match.params.playlistId) {
      this.props.requestSinglePlaylist(this.props.match.params.playlistId)
    }
  }

  render() {
    const { playlist, tracks, openModal } = this.props;
    const deleteType = "delete";

    return (
      <div className="playlist-index-flexbox">
        <div className="left-spacing">
          <Topbar openModal={ openModal } modalType={ deleteType } />
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

            { /* TODO: This is a link. How can I fix that? */ }
            {/*}<PlaylistIndexItem className="playlist-detail-info" playlist={ playlist } /> */}

            <div className="playlist-detail-tracks">
              <ol className="playlist-tracklist">
                { Object.values(tracks).map((track, i) => {
                  return <TrackIndexItem key={ track.id } track={ track } i={i} />
                }) }
              </ol>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default PlaylistDetail;
