import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";

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
