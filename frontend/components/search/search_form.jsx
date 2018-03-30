import React from 'react';
import { connect } from 'react-redux';
import { fetchResults, clearResults } from '../../actions/search_actions';
import { Redirect } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

import TrackIndex from '../tracks/track_index';

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
    const { tracks, trackIds, trackIndexType, openModal } = this.props;

    let trackItems = {};

    trackIds.forEach((trackId, i) => {
      trackItems[i] = tracks[trackId];
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
                  Search for an Album, Artist, Track, or Playlist
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

            <div className="search-result-index">
              <TrackIndex openModal={ openModal } type={ trackIndexType } tracks={ trackItems }/>
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
