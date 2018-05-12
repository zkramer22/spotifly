import React from 'react';
import { connect } from 'react-redux';
import { requestAllArtists } from '../../actions/artist_actions';
import { selectAllArtists } from '../../reducers/selectors';
import { openModal } from "../../actions/modal_actions";
import ArtistIndexItem from './artist_index_item';
import Topbar from '../bars/topbar';

  class ArtistIndex extends React.Component {
    componentDidMount() {
      this.props.requestAllArtists();
    }

    render() {
      const { artists, openModal } = this.props;

      return (
        <div className="BLACKround">
          <div className="index-flexbox home-gradient">
            <div className="left-spacing">
              <Topbar openModal={ openModal } modalType="create"/>
              <section className="playlist-index-container">
                <div className="playlist-index">
                  { artists.map(artist => <ArtistIndexItem key={ artist.id } artist={ artist } />) }
                </div>
              </section>
            </div>
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
      openModal: modal => dispatch(openModal(modal)),
      requestAllArtists: () => dispatch(requestAllArtists())
    };
  };

export default connect(msp, mdp)(ArtistIndex);
