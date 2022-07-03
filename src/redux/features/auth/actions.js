import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../api/request";
import { endSession } from "../../../utils";

export const registerUser = createAsyncThunk(
  "auth/register",
  async credential => {
    return await request.post("/users/register/", credential);
  }
);

export const loginUser = createAsyncThunk("auth/login", async credential => {
  return await request.post("/users/login/", credential);
});

export const googleSignInUser = createAsyncThunk(
  "auth/googleSignin",
  async credential => {
    return await request.post("/users/social/google/", credential);
  }
);
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  // remove token from session
  endSession();
  // logout from google
  window.google.accounts.id.disableAutoSelect();
  // log out from django backnend
  return await request.post("/users/logout/", {});
});
