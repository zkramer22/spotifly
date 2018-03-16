import { connect } from 'react-redux';

import PlaylistDetail from './playlist_detail';
import { requestSinglePlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { selectPlaylistTracks } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';
import { receiveCurrentTrack, removeCurrentTrack } from '../../actions/track_actions';

const msp = (state, ownProps) => {
  const playlist = state.entities.playlists[ownProps.match.params.playlistId] || {};

  return {
    trackIndexType: "playlist",
    playlist: playlist,
    tracks: selectPlaylistTracks(state, playlist)
  };
};

const mdp = dispatch => {
  return {
    requestSinglePlaylist: id => dispatch(requestSinglePlaylist(id)),
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(PlaylistDetail);
