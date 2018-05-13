export const fetchAllArtists = () => {
  return $.ajax({
    method: "GET",
    url: "api/artists"
  });
};

export const fetchArtist = id => {
  return $.ajax({
    method: "GET",
    url: `api/artists/${id}`
  });
};

export const followArtist = (userId, artistId) => {
  return $.ajax({
    method: "POST",
    url: "api/follows",
    data: { userId: userId, artistId: artistId }
  });
};

export const unfollowArtist = (userId, artistId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/follows/${artistId}`,
    data: { userId: userId, artistId: artistId }
  });
};
