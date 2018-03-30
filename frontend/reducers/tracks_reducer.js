import { merge } from 'lodash';

import  { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let tracks;

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      tracks = action.payload.tracks;
      return merge({}, state, tracks);
    case RECEIVE_ALBUM:
      tracks = action.payload.tracks;
      return merge({}, state, tracks);
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.results.tracks);
    default:
      return state;
  }
};
