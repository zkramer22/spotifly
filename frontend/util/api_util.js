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
