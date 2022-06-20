import { combineReducers } from "redux";
import todosReducer from "./test/todos";
import userSlice from "./users/userSlice";

const rootReducer = combineReducers({ todos: todosReducer, user: userSlice });

export default rootReducer;
