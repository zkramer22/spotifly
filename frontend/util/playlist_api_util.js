export const fetchAllPlaylists = () => {
  return $.ajax({
    method: "GET",
    url: "api/playlists"
  });
};

export const fetchPlaylist = id => {
  return $.ajax({
    method: "GET",
    url: `api/playlists/${id}`
  });
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: "POST",
    url: "api/playlists",
    data: { playlist }
  });
};

export const deletePlaylist = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/playlists/${id}`
  });
};

export const addTrackToPlaylist = (trackId, playlistId) => {
  return $.ajax({
    method: "POST",
    url: "api/track_playlists",
    data: { trackId: trackId, playlistId: playlistId }
  });
};

export const deleteTrackFromPlaylist = (trackId, id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/track_playlists/${id}`,
    data: { trackId }
  });
};

export const followPlaylist = (userId, playlistId) => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: { userId: userId, playlistId: playlistId }
  });
};
