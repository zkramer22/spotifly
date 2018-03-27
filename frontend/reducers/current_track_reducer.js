import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_TRACK,
  REMOVE_CURRENT_TRACK,
  PAUSE_CURRENT_TRACK
} from '../actions/track_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      return merge({}, state, { id: action.trackId, playlist: action.playlistId, playing: true } );
    case PAUSE_CURRENT_TRACK:
      return merge({}, state, { playing: false });
    case REMOVE_CURRENT_TRACK:
      return {};
    default:
      return state;
  }
};
