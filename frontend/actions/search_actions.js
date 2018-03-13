import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const receiveSearchResults = results => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};

export const clearResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  };
};

export const fetchResults = query => dispatch => {
  return APIUtil.fetchResults(query).then(results => {
    return dispatch(receiveSearchResults(results));
  });
};
