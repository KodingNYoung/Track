import { createSlice } from "@reduxjs/toolkit";
import { isValidJSON, setToken } from "../../../utils";
import {
  loginUser,
  registerUser,
  googleSignInUser,
  logoutUser
} from "./actions";

const initialState = {};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetStatus: state => {
      state.meta.status = "idle";
      state.meta.message = "";
    }
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.meta.status = "loading";
    });
  }
});

export { registerUser, loginUser, googleSignInUser, logoutUser };

export const { resetStatus } = authSlice.actions;

export default authSlice.reducer;
