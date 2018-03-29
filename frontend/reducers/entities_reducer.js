import { combineReducers } from 'redux';

import playlists from './playlists_reducer';
import tracks from './tracks_reducer';
import albums from './albums_reducer';

export default combineReducers({
  playlists,
  tracks,
  // albums
});
