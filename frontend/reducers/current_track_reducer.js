import { RECEIVE_CURRENT_TRACK } from '../actions/track_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      return action.trackId;
    default:
      return state;
  }
};
