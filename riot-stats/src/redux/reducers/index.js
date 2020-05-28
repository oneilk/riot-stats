import { combineReducers } from "redux";
import mode from "./modeReducer";
import search from "./searchReducer";

const rootReducer = combineReducers({
  mode,
  search,
});

export default rootReducer;
