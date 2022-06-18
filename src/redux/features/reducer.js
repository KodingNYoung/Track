import { combineReducers } from "redux";
import todosReducer from "./test/todos";

const rootReducer = combineReducers({ todos: todosReducer });

export default rootReducer;
