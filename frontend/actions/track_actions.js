import * as APIUtil from '../util/track_api_util';

export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const REMOVE_CURRENT_TRACK = "REMOVE_CURRENT_TRACK";
export const PAUSE_CURRENT_TRACK = "PAUSE_CURRENT_TRACK";
export const RECEIVE_TOTO = "RECEIVE_TOTO";

export const receiveCurrentTrack = (trackId, playlistId) => {
  return {
    type: RECEIVE_CURRENT_TRACK,
    trackId: trackId,
    playlistId: playlistId
  };
};

export const removeCurrentTrack = () => {
  return {
    type: REMOVE_CURRENT_TRACK
  };
};

export const receiveToto = toto => {
  return {
    type: RECEIVE_TOTO,
    toto
  };
};

export const pauseCurrentTrack = () => {
  return {
    type: PAUSE_CURRENT_TRACK
  };
};

export const requestToto = () => dispatch => {
  return APIUtil.fetchToto(220).then(toto => { // // //  track id of 'Africa' by Toto
    return dispatch(receiveToto(toto));
  });
};
