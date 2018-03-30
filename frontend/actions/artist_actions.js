import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALL_ARTISTS = "RECEIVE_ALL_ARTISTS";

export const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

export const receiveAllArtists = () => {
  return {
    type: RECEIVE_ALL_ARTISTS
  };
};

export const requestArtist = id => dispatch => {
  return APIUtil.fetchArtist(id).then(artist => {
    return dispatch(receiveArtist(artist));
  });
};

export const requestAllArtists = () => dispatch => {
  return APIUtil.fetchAllArtists().then(artists => {
    return dispatch(receiveAllArtists(artists));
  });
};
