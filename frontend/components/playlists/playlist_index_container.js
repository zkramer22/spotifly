import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';
import { requestToto } from '../../actions/track_actions';
import { requestAllPlaylists } from '../../actions/playlist_actions';
import { selectAllPlaylists } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    playlists: selectAllPlaylists(state)
  };
};

const mdp = dispatch => {
  return {
    requestToto: () => dispatch(requestToto()),
    openModal: modal => dispatch(openModal(modal)),
    requestAllPlaylists: () => dispatch(requestAllPlaylists())
  };
};

export default connect(msp, mdp)(PlaylistIndex);
