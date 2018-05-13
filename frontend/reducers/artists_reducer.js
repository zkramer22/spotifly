import { merge } from 'lodash';
import {
  RECEIVE_ARTIST,
  RECEIVE_ALL_ARTISTS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/artist_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let artist;

  switch (action.type) {
    case RECEIVE_ARTIST:
      artist = action.payload.artist;
      return merge({}, state, { [artist.id]: artist });
    case RECEIVE_ALL_ARTISTS:
      return merge({}, state, action.artists);
    case RECEIVE_FOLLOW:
      artist = action.follow.artist;
      return merge({}, state, { [artist.id]: artist });
    case REMOVE_FOLLOW:
      artist = action.follow.artist;
      return { [artist.id]: artist };
    default:
      return state;
  }
};
