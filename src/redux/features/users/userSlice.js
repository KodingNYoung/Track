import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./actions";

const initialState = { user_info: {}, meta: { status: "idle" } };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.meta.status = "registering";
      })
      .addCase(registerUser.fulfilled, state => {
        state.meta.status = "success";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.meta.status = "error";
        state.meta.message = action.error.message;
      });
  }
});

export { registerUser };

export const {} = userSlice.actions;

export default userSlice.reducer;
