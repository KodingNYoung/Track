import { createSlice } from "@reduxjs/toolkit";
import { getUserProfile } from "./actions";

const initialState = {};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetStatus: state => {
      state = {};
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUserProfile.pending, state => {
        state.status = "fetching";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        console.log(action);
      });
  }
});

export { getUserProfile };

export const {} = userSlice.actions;

export default userSlice.reducer;
