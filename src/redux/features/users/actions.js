import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../api/request";

export const registerUser = createAsyncThunk(
  "user/register",
  async credential => {
    return await request.post("/users/register/", credential, {
      headers: { "Content-Type": "application/json" }
    });
  }
);
