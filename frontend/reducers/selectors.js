import values from 'lodash/values';

export const selectAllPlaylists = state => values(state.entities.playlists);

export const selectPlaylistTracks = (state, playlist) => {
  if (!playlist.track_ids) { return [] }
  return playlist.track_ids.map(id => state.entities.tracks[id]);
};

export const selectAlbumTracks = (state, album) => {
  if (!album.track_ids) { return [] }
  return album.track_ids.map(id => state.entities.tracks[id]);
};

export const selectAllArtists = state => values(state.entities.artists);

export const selectArtistTracks = (state, artist) => {
  if (!artist.track_ids) { return [] }
  const allTracks = artist.track_ids.map(id => state.entities.tracks[id]);
  return allTracks.slice(0, 5);
};

export const selectArtistAlbums = (state, artist) => {
  if (!artist.album_ids) { return [] }
  return artist.album_ids.map(id => state.entities.albums[id]);
};

export const getTrackList = (state, currentTrack) => {
  if (!currentTrack.id) { return [] }
  const currentPlaylist = state.entities.playlists[parseInt(state.ui.currentTrack.playlist)];
  if (!currentPlaylist) { return [] }
  return state.entities.playlists[parseInt(state.ui.currentTrack.playlist)].track_ids;
};
