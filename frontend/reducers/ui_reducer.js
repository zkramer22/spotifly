import { combineReducers } from 'redux';

import modal from './modal_reducer';
import searches from './searches_reducer';
import addTrack from './add_track_reducer';
import currentTrack from './current_track_reducer';

export default combineReducers({
  modal,
  searches,
  addTrack,
  currentTrack
});
