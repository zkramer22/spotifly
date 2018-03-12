import React from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../actions/search_actions';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    };
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery(e) {
    this.setState({ query: e.currentTarget.value });
    this.props.fetchResults(this.state);
  }

  render() {
    return (
      <div className="BLACKround">
        <div className="search-index-flexbox">
          <div className="left-spacing-exact">
            <div className="search-form-wrapper">
              <form
                className="search-form">
                <span
                  style={{ fontSize: "12px", letterSpacing: "1px"}}>
                  Search for an Album, Artist, Track, or Playlist
                </span>
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
          </div>
        </div>
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchResults: query => dispatch(fetchResults(query))
  };
};

export default connect(null, mdp)(Search);
