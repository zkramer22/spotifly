import { PUT_TRACK_IN_STATE, REMOVE_TRACK_FROM_STATE } from '../actions/playlist_actions';

export default (state = null, action) => {
  switch (action.type) {
    case PUT_TRACK_IN_STATE:
      return action.trackId;
    case REMOVE_TRACK_FROM_STATE:
      return null;
    default:
      return state;
  }
}
