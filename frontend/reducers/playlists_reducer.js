import { merge } from 'lodash';
import {
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
  RECEIVE_TRACK_PLAYLIST,
  REMOVE_TRACK_PLAYLIST
} from '../actions/playlist_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let playlist;
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, action.playlists)
    case RECEIVE_PLAYLIST:
      playlist = action.payload.playlist
      return merge({}, state, { [playlist.id]: playlist });
    case RECEIVE_TRACK_PLAYLIST:
      return state;
    case REMOVE_TRACK_PLAYLIST:
      let playlist = newState[action.playlistId];
      let trackIds = playlist.track_ids;
      let index = trackIds.indexOf(action.trackId);
      trackIds.splice(index, 1);
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};
