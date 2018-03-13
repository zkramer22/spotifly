import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import {
  RECEIVE_PLAYLIST,
  RECEIVE_ALL_PLAYLISTS,
  RECEIVE_TRACK_PLAYLIST
} from "../actions/playlist_actions";

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
    case RECEIVE_PLAYLIST:
    // case RECEIVE_ALL_PLAYLISTS:
    case RECEIVE_TRACK_PLAYLIST:
      return null;
    default:
      return state;
  }
}
