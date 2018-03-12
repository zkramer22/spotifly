import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }


// TODO: DONT FORGET onUpdate class method, onChange input field prop, etc.


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
                placeholder="Start typing..."
                autoFocus="autofocus"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
