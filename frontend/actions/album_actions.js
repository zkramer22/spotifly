import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";

export const receiveAllAlbums = albums => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    albums
  };
};

export const receiveAlbum = payload => {
  return {
    type: RECEIVE_ALBUM,
    payload
  };
};

export const receiveArtistAlbums = () => {
  return {
    type: RECEIVE_ARTIST_ALBUMS
  };
};

export const requestAllAlbums = () => dispatch => {
  return APIUtil.fetchAllAlbums().then(albums => {
    return dispatch(receiveAllAlbums(albums));
  });
};

export const requestAlbum = id => dispatch => {
  return APIUtil.fetchAlbum(id).then(album => {
    return dispatch(receiveAlbum(album));
  });
};

export const requestArtistAlbums = () => dispatch => {
  return APIUtil.fetchArtistAlbums().then(albums => {
    return dispatch(receiveArtistAlbums(albums));
  });
};
