import { merge } from 'lodash';
import {
  RECEIVE_ARTIST,
  RECEIVE_ALL_ARTISTS,
  RECEIVE_FOLLOW
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
      return state;
    default:
      return state;
  }
};
