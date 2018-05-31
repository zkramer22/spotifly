import { merge } from 'lodash';

import {
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from '../actions/search_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return {
        tracks: action.results.trackRanks,
        albums: action.results.albumRanks,
        artists: action.results.artistRanks
      };
    case CLEAR_SEARCH_RESULTS:
      return { tracks: [], albums: [], artists: [] };
    default:
      return state;
  }
};
