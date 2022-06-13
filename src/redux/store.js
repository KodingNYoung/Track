import { applyMiddleware, compose, createStore } from "redux";
import { logger } from "./middleware";
// reducers
import reducer from "./features/reducer";

const enhancers = compose(
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// second argument is a preloaded/persistent state
const store = createStore(reducer, {}, enhancers);

export default store;
