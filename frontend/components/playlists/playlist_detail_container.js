import { connect } from 'react-redux';

import PlaylistDetail from './playlist_detail';
import { requestSinglePlaylist } from '../../actions/playlist_actions';
import { selectPlaylistTracks } from '../../reducers/selectors';

const msp = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.match.params.playlistId];

  return {
    playlist: playlist || [],
    tracks: state.entities.tracks || []
  };
};

const mdp = dispatch => {
  return {
    requestSinglePlaylist: id => dispatch(requestSinglePlaylist(id))
  };
};

export default connect(msp, mdp)(PlaylistDetail);
