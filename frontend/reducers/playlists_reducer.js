import { merge } from 'lodash';
import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let playlist;

  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, action.playlists)
    case RECEIVE_PLAYLIST:
      playlist = action.payload.playlist
      return merge({}, { [playlist.id]: playlist });
    case REMOVE_PLAYLIST:
      newState = merge({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};
