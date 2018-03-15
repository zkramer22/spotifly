export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK";
export const REMOVE_CURRENT_TRACK = "REMOVE_CURRENT_TRACK";

export const receiveCurrentTrack = trackId => {
  return {
    type: RECEIVE_CURRENT_TRACK,
    trackId
  };
};

export const removeCurrentTrack = () => {
  return {
    type: REMOVE_CURRENT_TRACK
  };
};
