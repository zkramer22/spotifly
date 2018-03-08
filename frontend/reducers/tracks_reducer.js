import  { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);

  let tracks;

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      debugger
      tracks = action.payload.tracks;
      return merge({}, state, tracks)
    default:
      return state;
  }
};
