import React from 'react';
import { connect } from 'react-redux';
import { fetchResults, clearResults } from '../../actions/search_actions';
import { Link, Route } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

import TrackIndex from '../tracks/track_index';
import AlbumResults from '../albums/album_results';
import ArtistResults from '../artists/artist_results';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    this.setState({ query: e.currentTarget.value });

    if (this.timeout) { clearTimeout(this.timeout) }

    if ((e.currentTarget.value === "")) {
      this.props.clearResults();
    } else {
      this.timeout = setTimeout(() => {
        return this.props.fetchResults(this.state);
      }, 800);
    }
  }

  componentWillUnmount() {
    this.props.clearResults();
  }

  render() {
    const { tracks, trackIds, albums, albumIds, artists, artistIds,
            trackIndexType, openModal } = this.props;

    let trackItems = {};
    let albumItems = {};
    let artistItems = {};

    trackIds.forEach((trackId, i) => {
      trackItems[i] = tracks[trackId];
    });

    albumIds.forEach((albumId, i) => {
      albumItems[i] = albums[albumId];
    });

    artistIds.forEach((artistId, i) => {
      artistItems[i] = artists[artistId];
    });

    return (
      <div className="BLACKround greyish">
        <div className="search-index-flexbox">
          <div className="left-spacing-exact">

            <div className="search-form-wrapper">
              <form
                className="search-form">
                <span
                  style={{ fontSize: "12px", letterSpacing: "1px"}}>
                  Search for Tracks, Albums, or Artists
                </span><br/>
                <input
                className="search-input"
                type="text"
                onChange={ this.updateQuery }
                placeholder="Start typing..."
                autoFocus="autofocus"
                value={ this.state.query }
                />
              </form>
            </div>

            <div className="search-nav-container">
              <div className="search-nav">
                <Link to="/searches/tracks">
                  TRACKS
                </Link>
                <Link to="/searches/albums">
                  ALBUMS
                </Link>
                <Link to="/searches/artists">
                  ARTISTS
                </Link>
              </div>
            </div>

            <div className="search-result-index">
              <Route
                exact path="/searches/tracks"
                render={ routeProps => (
                  <TrackIndex {...routeProps }
                    openModal={ openModal }
                    type={ trackIndexType }
                    tracks={ trackItems } />
              )}/>
              <Route
                exact path="/searches/albums"
                render={ routeProps => (
                  <AlbumResults {...routeProps }
                    albums={ albumItems } />
              )}/>
              <Route
                exact path="/searches/artists"
                render={ routeProps => (
                  <ArtistResults {...routeProps }
                    artists={ artistItems } />
              )}/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const msp = state => {
  return {
    trackIndexType: "search",
    tracks: state.entities.tracks || [],
    trackIds: state.ui.searches.tracks || [],
    albums: state.entities.albums || [],
    albumIds: state.ui.searches.albums || [],
    artists: state.entities.artists || [],
    artistIds: state.ui.searches.artists || [],
    trackInfo: state.entities.tracks[state.ui.currentTrack.id] || {},
    currentTrack: state.ui.currentTrack
  };
};

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    fetchResults: query => dispatch(fetchResults(query)),
    clearResults: () => dispatch(clearResults())
  };
};

export default connect(msp, mdp)(SearchForm);
