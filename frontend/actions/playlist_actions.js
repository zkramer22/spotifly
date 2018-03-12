import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

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

export const removePlaylist = playlistId => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId
  };
};

export const requestAllPlaylists = () => dispatch => {
  return APIUtil.fetchAllPlaylists().then(playlists => {
    return dispatch(receiveAllPlaylists(playlists));
  });
};

export const requestSinglePlaylist = id => dispatch => {
  return APIUtil.fetchPlaylist(id).then(playlist => {
    return dispatch(receiveSinglePlaylist(playlist));
  });
};

export const createPlaylist = playlist => dispatch => {
  return APIUtil.createPlaylist(playlist).then(playlist => {
    return dispatch(receiveSinglePlaylist(playlist));
  });
};

export const deletePlaylist = playlistId => dispatch => {
  return APIUtil.deletePlaylist(playlistId).then(playlist => {
    return dispatch(removePlaylist(playlistId));
  });
};
