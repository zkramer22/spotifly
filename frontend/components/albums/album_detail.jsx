import React from 'react';
import TrackIndex from '../tracks/track_index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestAlbum } from '../../actions/album_actions';
import { selectAlbumTracks } from '../../reducers/selectors';

class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAlbum(this.props.match.params.albumId);
  }

  render() {
    const { album, tracks, openModal, trackIndexType } = this.props;

    return (
      <div className="BLACKround">
        <div className="index-flexbox random-gradient2">
          <div className="left-spacing">

            <section className="album-detail-container">
              <div className="album-detail-info">
                <img
                  className="album-index-item-coverart"
                  src={ album.artwork }
                  alt="meh" />
                <h2>{ album.name }</h2>
                <Link className="album-artist-name" to={`/artists/${album.artistId}`}>
                  <h4 style={{ fontWeight:"200", color: "lightgrey"}}>
                    { album.artistName }
                  </h4>
                </Link>
              </div>

              <div className="album-detail-tracks">
                <TrackIndex
                  albumId={ this.props.match.params.albumId }
                  type={ trackIndexType }
                  tracks={ tracks }/>
              </div>
            </section>

          </div>
        </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.albumId] || {};

  return {
    trackIndexType: "album",
    album: album,
    tracks: selectAlbumTracks(state, album)
  };
};

const mdp = dispatch => {
  return {
    requestAlbum: id => dispatch(requestAlbum(id)),
    openModal: modal => dispatch(openModal(modal))
  };
}
export default connect(msp, mdp)(AlbumDetail);
