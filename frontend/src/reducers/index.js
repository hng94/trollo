import { combineReducers } from "redux";
import cardsById from "./cardsById";
import listsById from "./listsById";
import boardsById from "./boardsById";
import isGuest from "./isGuest";
import currentBoardId from "./currentBoardId";
import userReducer from "./userReducer";
import alert from "./alertReducer";

export default combineReducers({
  cardsById,
  listsById,
  boardsById,
  alert,
  user: userReducer,
  // currentBoardId
});
