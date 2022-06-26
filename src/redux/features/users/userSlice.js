import { createSlice } from "@reduxjs/toolkit";
import { isValidJSON } from "../../../utils";
import { loginUser, registerUser } from "./actions";

const initialState = { user_info: {}, meta: { status: "idle" } };
const userSlice = createSlice({
  name: "user",
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
        state.meta.status = "registering";
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
        state.meta.status = "loging in";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.meta.status = "success";
        state.meta.message = "Successfully login.";
        state.user_info = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        const message = isValidJSON(action.error.message)
          ? JSON.parse(action.error.message).error.message
          : action.error.message;
        state.meta.status = "error";
        state.meta.message = message;
      });
  }
});

export { registerUser, loginUser };

export const { resetStatus } = userSlice.actions;

export default userSlice.reducer;
