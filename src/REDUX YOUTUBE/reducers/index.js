// now import reducer func in one file
import { combineReducers } from "redux";
import IncDec from "./IncDec";

export const rootReducer = combineReducers({
  IncDec,
});
