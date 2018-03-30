import * as APIUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

export const PUT_TRACK_IN_STATE = "PUT_TRACK_IN_STATE";
export const REMOVE_TRACK_FROM_STATE = "REMOVE_TRACK_FROM_STATE";
export const RECEIVE_TRACK_PLAYLIST = "RECEIVE_TRACK_PLAYLIST";
export const REMOVE_TRACK_PLAYLIST = "REMOVE_TRACK_PLAYLIST";

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

export const receiveTrackPlaylist = trackPlaylist => {
  return {
    type: RECEIVE_TRACK_PLAYLIST,
    trackPlaylist
  };
};

export const putTrackInState = trackId => {
  return {
    type: PUT_TRACK_IN_STATE,
    trackId
  };
};

export const removeTrackFromState = () => {
  return {
    type: REMOVE_TRACK_FROM_STATE
  };
};

export const removeTrackPlaylist = ({ trackId, playlistId }) => {
  return {
    type: REMOVE_TRACK_PLAYLIST,
    trackId,
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

export const addTrackToPlaylist = playlistId => (dispatch, getState) => {
  return APIUtil.addTrackToPlaylist(getState().ui.addTrack, playlistId).then(trackPlaylist => {
    return dispatch(receiveTrackPlaylist(trackPlaylist));
  });
};

export const removeTrackFromPlaylist = (trackId, playlistId) => dispatch => {
  return APIUtil.deleteTrackFromPlaylist(trackId, playlistId).then(trackPlaylist => {
    return dispatch(removeTrackPlaylist(trackPlaylist));
  });
};
