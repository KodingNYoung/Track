import { configureStore } from "@reduxjs/toolkit";

// reducers
import reducer from "./features/reducer";

const store = configureStore({
  reducer
});

export default store;
