import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import boardReducer from "./boardReducer";
import listReducer from "./listReducer";
import userReducer from "./userReducer";
import alert from "./alertReducer";

export default combineReducers({
  cardReducer,
  listReducer,
  boardReducer,
  alert,
  user: userReducer
});
