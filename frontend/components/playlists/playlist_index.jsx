import React from 'react';
import { connect } from 'react-redux';
import { requestToto } from '../../actions/track_actions';
import { requestAllPlaylists } from '../../actions/playlist_actions';
import { selectAllPlaylists } from '../../reducers/selectors';
import { openModal } from "../../actions/modal_actions";
import PlaylistIndexItem from './playlist_index_item';
import Topbar from '../bars/topbar';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPlaylists();
  }

  render() {
    const { playlists, openModal } = this.props;

    return (
      <div className="BLACKround">
        <div className="index-flexbox playlist-gradient">
          <div className="left-spacing">
            <Topbar openModal={ openModal } modalType="create" />
            <section className="collection-index-container">
              <div className="playlist-index">
                { playlists.map(playlist => <PlaylistIndexItem
                  key={ playlist.id } playlist={ playlist } />) }
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
    playlists: selectAllPlaylists(state)
  };
};

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    requestAllPlaylists: () => dispatch(requestAllPlaylists())
  };
};

export default connect(msp, mdp)(PlaylistIndex);
