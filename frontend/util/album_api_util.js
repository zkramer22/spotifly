export const fetchAllAlbums = () => {
  return $.ajax({
    method: "GET",
    url: "api/albums"
  });
};

export const fetchArtistAlbums = () => {
  return $.ajax({
    method: "GET",
    url: "api/albums"
  });
};

export const fetchAlbum = id => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`
  });
};
