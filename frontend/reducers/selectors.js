import values from 'lodash/values';

export const selectAllPlaylists = state => values(state.entities.playlists);

export const selectPlaylistTracks = (state, playlist) => {
  if (!playlist.track_ids) {
    return [];
  }
  return playlist.track_ids.map(id => state.entities.tracks[id])
};
