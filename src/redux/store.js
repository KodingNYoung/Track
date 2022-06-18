import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

// redux persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import reducer from "./features/reducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk]
});
export const persistor = persistStore(store);
export default store;
