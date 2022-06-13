// middlewares are functions that run anytime an action is dispatched to the store, they run first before the action
//is dispatched to reducers
export const logger = storeAPI => next => action => {
  console.log("dispatching: ", action);
  const result = next(action);
  console.log("New state", storeAPI.getState());
  return result;
};
