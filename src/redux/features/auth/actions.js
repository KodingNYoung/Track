import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../api/request";

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
