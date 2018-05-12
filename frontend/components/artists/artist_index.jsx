import React from 'react';
import { connect } from 'react-redux';
import { requestAllArtists } from '../../actions/artist_actions';
import { selectAllArtists } from '../../reducers/selectors';
import ArtistIndexItem from './artist_index_item';
import Topbar from '../bars/topbar';

  class ArtistIndex extends React.Component {
    componentDidMount() {
      this.props.requestAllArtists();
    }

    render() {
      const { artists } = this.props;

      return (
        <div className="index-flexbox home-gradient">
          <div className="left-spacing">
            <Topbar openModa
          </div>
        </div>
      );
    }

  }

  const msp = state => {
    return {
      artists: selectAllArtists(state)
    };
  };

  const mdp = dispatch => {
    return {
      requestAllArtists: () => dispatch(requestAllArtists())
    };
  };

export default connect(msp, mdp)(ArtistIndex);
