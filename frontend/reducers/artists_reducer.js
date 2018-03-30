import { merge } from 'lodash';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  let artist;

  switch (action.type) {
    case RECEIVE_ARTIST:
      artist = action.payload.artist;
      return merge({}, state, { [artist.id]: artist });
    default:
      return state;
  }
};
