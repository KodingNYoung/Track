import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { request } from "../../../api/request";
// async thunk creators
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return await request.get("/users");
});

export const addTodos = createAsyncThunk("todos/addTodos", async text => {
  return await request.post("/users", { text }, {});
});
