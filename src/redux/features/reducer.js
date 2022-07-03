import { combineReducers } from "redux";
import todosReducer from "./test/todos";
import authSlice from "./auth/authSlice";

const rootReducer = combineReducers({ todos: todosReducer, auth: authSlice });

export default rootReducer;
