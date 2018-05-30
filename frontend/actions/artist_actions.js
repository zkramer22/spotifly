import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveAllArtists = artists => {
  return {
    type: RECEIVE_ALL_ARTISTS,
    artists
  };
};

export const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

export const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

export const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    follow
  };
};

export const requestAllArtists = () => dispatch => {
  return APIUtil.fetchAllArtists().then(artists => {
    return dispatch(receiveAllArtists(artists));
  });
};

export const requestArtist = id => dispatch => {
  return APIUtil.fetchArtist(id).then(artist => {
    return dispatch(receiveArtist(artist));
  });
};

export const followArtist = artistId => (dispatch, getState) => {
  return APIUtil.followArtist(getState().session.currentUser.id, artistId).then(follow => {
    return dispatch(receiveFollow(follow));
  });
};

export const unfollowArtist = artistId => (dispatch, getState) => {
  return APIUtil.unfollowArtist(getState().session.currentUser.id, artistId).then(follow => {
    return dispatch(removeFollow(follow));
  });
};
