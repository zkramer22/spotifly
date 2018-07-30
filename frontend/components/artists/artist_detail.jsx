import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  requestArtist,
  followArtist,
  unfollowArtist } from '../../actions/artist_actions';
import TrackIndex from '../tracks/track_index';
import Topbar from '../bars/topbar';
import {
  selectArtistTracks,
  selectArtistAlbums } from '../../reducers/selectors';

class ArtistDetail extends React.Component {
  componentDidMount() {
    this.props.requestArtist(this.props.match.params.artistId);
  }

  render() {
    if (!this.props.currentUser) {
      this.props.history.push("/");
      return null;
    }

    const { artist, tracks, albums, trackIndexType,
            openModal, followArtist, unfollowArtist } = this.props;

    let followers = null;
    let followButton;

    if (artist.follower_ids) {
      const num = artist.follower_ids.length;
      num !== 1 ? (
        followers = (
          <h4>{ num } followers</h4>
        )
      ) : (
        followers = (
          <h4>{ num } follower</h4>
        )
      )

      artist.follower_ids.includes(this.props.currentUser.id) ? (
        followButton = (
          <div className="follow-button-container">
            <button className="follow-button"
              onClick={ () => unfollowArtist(artist.id) }>
              UNFOLLOW
            </button>
          </div>
        )
      ) : (
        followButton = (
          <div className="follow-button-container">
            <button className="follow-button"
              onClick={ () => followArtist(artist.id) }>
              FOLLOW
            </button>
          </div>
        )
      )
    }

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
              <h1 style={{ fontSize: "75px", fontWeight: "600" }}>
                { artist.name }
              </h1>
              <br/>
              { followers }
              <br/>
                { followButton }
              <br/><br/><br/><br/>
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
                          <span style={{
                              fontWeight: "300",
                              letterSpacing: "0.8px",
                              textAlign: "center" }}>
                            { album.name }
                          </span>
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
    currentUser: state.session.currentUser,
    trackIndexType: "artist",
    artist: artist,
    tracks: selectArtistTracks(state, artist),
    albums: selectArtistAlbums(state, artist)
  };
};

const mdp = dispatch => {
  return {
    unfollowArtist: artistId => dispatch(unfollowArtist(artistId)),
    followArtist: artistId => dispatch(followArtist(artistId)),
    requestArtist: id => dispatch(requestArtist(id)),
    openModal: modal => dispatch(openModal(modal))
  };
}

export default connect(msp, mdp)(ArtistDetail);
