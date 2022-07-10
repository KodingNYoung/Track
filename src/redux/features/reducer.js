import { combineReducers } from "redux";
import todosReducer from "./test/todos";
import authSlice from "./auth/authSlice";
import userSlice from "./user/slice";

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authSlice,
  user: userSlice
});

export default rootReducer;
