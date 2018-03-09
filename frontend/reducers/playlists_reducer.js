import {
  RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST
} from '../actions/playlist_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);

  let playlist;



  switch (action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, action.playlists)
    case RECEIVE_PLAYLIST:
      playlist = action.payload.playlist
      return merge({}, { [playlist.id]: playlist });
    default:
      return state;
  }
};
