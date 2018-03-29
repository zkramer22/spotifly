export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const REMOVE_CURRENT_TRACK = "REMOVE_CURRENT_TRACK";
export const PAUSE_CURRENT_TRACK = "PAUSE_CURRENT_TRACK";
// export const PLAY_CURRENT_TRACK = "PLAY_CURRENT_TRACK";

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

// export const playCurrentTrack = () => {
//   return {
//     type: PLAY_CURRENT_TRACK
//   };
// };

export const pauseCurrentTrack = () => {
  return {
    type: PAUSE_CURRENT_TRACK
  };
};
