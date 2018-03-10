import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";

export const receiveAllPlaylists = playlists => {
  return {
    type: RECEIVE_ALL_PLAYLISTS,
    playlists
  };
};

export const receiveSinglePlaylist = payload => {
  return {
    type: RECEIVE_PLAYLIST,
    payload
  };
};

export const requestAllPlaylists = () => dispatch => {
  return APIUtil.fetchAllPlaylists().then(playlists => dispatch(receiveAllPlaylists(playlists)));
};

export const requestSinglePlaylist = id => dispatch => {
  return APIUtil.fetchPlaylist(id).then(playlist => dispatch(receiveSinglePlaylist(playlist)));
};

export const createPlaylist = playlist => dispatch => {
  return APIUtil.createPlaylist(playlist).then(playlist => dispatch(receiveSinglePlaylist(playlist)));
};
