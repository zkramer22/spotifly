import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    // SAME RETURN VALUE FOR EITHER CLICKING "X" OR
    // SUCCESSFULLY CREATING PLAYLIST !
    case CLOSE_MODAL:
    case RECEIVE_PLAYLIST:
      return null;
    default:
      return state;
  }
}
