import PlaylistIndex from './playlist_index';
import { connect } from 'react-redux';
import { requestAllPlaylists } from '../../actions/playlist_actions';
import { selectAllPlaylists } from '../../reducers/selectors';

const msp = state => {
  return {
    playlists: selectAllPlaylists(state)
  };
};

const mdp = dispatch => {
  return {
    requestAllPlaylists: () => dispatch(requestAllPlaylists())
  };
};

export default connect(msp, mdp)(PlaylistIndex);
