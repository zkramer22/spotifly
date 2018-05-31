import { merge } from 'lodash';
import { RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let album;

  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      album = action.payload.album
      return merge({}, state, { [album.id]: album });
    case RECEIVE_ARTIST:
      return merge({}, state, action.payload.albums);
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.results.albums);
    default:
      return state;
  }
};
