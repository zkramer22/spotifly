import { merge } from 'lodash';
import {
  RECEIVE_ARTIST,
  RECEIVE_ALL_ARTISTS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/artist_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let artist;

  switch (action.type) {
    case RECEIVE_ARTIST:
      artist = action.payload.artist;
      return merge({}, state, { [artist.id]: artist });
    case RECEIVE_ALL_ARTISTS:
      return action.artists;
    case RECEIVE_FOLLOW:
      artist = action.follow.artist;
      return merge({}, state, { [artist.id]: artist });
    case REMOVE_FOLLOW:
      artist = action.follow.artist;
      return { [artist.id]: artist };
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.results.artists);
    default:
      return state;
  }
};
