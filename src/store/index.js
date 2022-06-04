import { configureStore } from "@reduxjs/toolkit";

import authReducers from "./reducers/auth";

export const store = configureStore({
  reducer: {
    authReducers
  }
});
