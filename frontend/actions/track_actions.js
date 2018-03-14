export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";

export const receiveCurrentTrack = trackId => {
  return {
    type: RECEIVE_CURRENT_TRACK,
    trackId
  };
};
