import { merge } from 'lodash';
import {
  RECEIVE_ARTIST,
  RECEIVE_FOLLOW
} from '../actions/artist_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let artist;

  switch (action.type) {
    case RECEIVE_ARTIST:
      artist = action.payload.artist;
      return merge({}, state, { [artist.id]: artist });
    case RECEIVE_FOLLOW:
      return state;
    default:
      return state;
  }
};
