import { combineReducers } from "redux";
import buttonsReducer from "./test/showSlice";
import testReducer from "./test/testSlice";

const rootReducer = combineReducers({
  test: testReducer,
  buttons: buttonsReducer
});

export default rootReducer;
