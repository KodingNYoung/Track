import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../api/request";

export const getUserProfile = createAsyncThunk(
  "user/profileFetched",
  async () => {
    return await request.get("/users/profile/", true);
  }
);
