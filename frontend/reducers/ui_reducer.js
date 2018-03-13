import { combineReducers } from 'redux';

import modal from './modal_reducer';
import searches from './searches_reducer';

export default combineReducers({
  modal,
  searches
});
