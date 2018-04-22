import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestArtist } from '../../actions/artist_actions';
import TrackIndex from '../tracks/track_index';
import Topbar from '../bars/topbar';
import { selectArtistTracks, selectArtistAlbums } from '../../reducers/selectors';

class ArtistDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  render() {
    const { artist, tracks, albums, trackIndexType, openModal } = this.props;

    return (
      <div className="BLACKround">
        <div className="index-flexbox greyish">
          <div className="artist-cover-photo-container"
            style={{ backgroundImage: `url(${artist.coverPhoto})` }}>
          </div>
          <div className="left-spacing-exact">
            <Topbar/>

            <section className="artist-detail-container">
              <br/><br/><br/><br/>
              <h1 style={{ fontSize: "75px", fontWeight: "600" }}>{ artist.name }</h1>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <h2 style={{ fontSize: "33px", fontWeight: "600" }}>Popular</h2>

              <div className="artist-detail-tracks">
                <TrackIndex
                  artistId={ this.props.match.params.artistId }
                  type={ trackIndexType }
                  tracks={ tracks } />
              </div>

              <div className="artist-detail-albums">
                <h2 style={{
                    fontSize: "33px", fontWeight: "600", textAlign: "center"
                  }}>Albums
                </h2>
                <br/><br/>
                <div className="albumlist">
                  { albums.map((album, i) => {
                    return (
                      <div className="artist-album-container" key={i}>
                        <Link to={ `/albums/${album.id}` }>
                          <img src={ album.artwork }/>
                          <div style={{
                              fontWeight: "300", letterSpacing: "0.8px", textAlign: "center" }}>
                            { album.name }
                          </div>
                        </Link>
                      </div>
                    );
                  }) }
                </div>

              </div>

            </section>

          </div>
        </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const artist = state.entities.artists[ownProps.match.params.artistId] || {};

  return {
    trackIndexType: "artist",
    artist: artist,
    tracks: selectArtistTracks(state, artist),
    albums: selectArtistAlbums(state, artist)
  };
};

const mdp = dispatch => {
  return {
    requestArtist: id => dispatch(requestArtist(id)),
    openModal: modal => dispatch(openModal(modal))
  };
}
export default connect(msp, mdp)(ArtistDetail);
