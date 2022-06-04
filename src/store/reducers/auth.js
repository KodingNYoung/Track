import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../config";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: async loginCredentials => {
      console.log("hello");
    }
  }
});
export const { login } = authSlice.actions;
export default authSlice.reducer;
