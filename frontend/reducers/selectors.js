import values from 'lodash/values';

export const selectAllPlaylists = state => values(state.entities.playlists);

export const selectPlaylistTracks = ({state, playlist}) => {
  return playlist.track_ids.map(id => state.entities.tracks[id])
};
