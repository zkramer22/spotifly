import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = data => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    data
  };
};

export const fetchResults = query => dispatch => {
  return APIUtil.fetchResults(query).then(results => {
    return dispatch(receiveSearchResults(results));
  });
};
