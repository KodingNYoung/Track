import { createSlice } from "@reduxjs/toolkit";
import { isValidJSON, setToken } from "../../../utils";
import {
  loginUser,
  registerUser,
  googleSignInUser,
  logoutUser
} from "./actions";

const initialState = { auth_info: {}, meta: { status: "idle", message: "" } };
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
    builder
      .addCase(registerUser.pending, state => {
        state.meta.status = "loading";
      })
      .addCase(registerUser.fulfilled, state => {
        state.meta.status = "success";
        state.meta.message =
          "Registration successfully, you will be redirected to the login page to sign in to your dashboard.";
      })
      .addCase(registerUser.rejected, (state, action) => {
        const message = isValidJSON(action.error.message)
          ? JSON.parse(action.error.message)
          : action.error.message;
        state.meta.status = "error";
        state.meta.message = message;
      })
      .addCase(loginUser.pending, state => {
        state.meta.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.meta.status = "success";
        state.meta.message = "Successfully login.";
        state.auth_info = action.payload;
        setToken(action.payload.access_token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        const message = isValidJSON(action.error.message)
          ? JSON.parse(action.error.message).error.message
          : action.error.message;
        state.meta.status = "error";
        state.meta.message = message;
      })
      .addCase(googleSignInUser.pending, state => {
        state.meta.status = "g_loading";
      })
      .addCase(googleSignInUser.fulfilled, (state, action) => {
        state.meta.status = "g_success";
        state.meta.message = "You have been signed in successfully.";
        state.auth_info = action.payload;
        setToken(action.payload.access_token);
      })
      .addCase(googleSignInUser.rejected, (state, action) => {
        const message = isValidJSON(action.error.message)
          ? JSON.parse(action.error.message).email.error_message
          : action.error.message;
        state.meta.status = "error";
        state.meta.message = message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        console.log(action);
        state.meta.status = "logout_success";
        state.auth_info = {};
      });
  }
});

export { registerUser, loginUser, googleSignInUser, logoutUser };

export const { resetStatus } = authSlice.actions;

export default authSlice.reducer;
