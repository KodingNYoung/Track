import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { request } from "../../../api/request";
import { normalizeArray } from "../../../utils";
const initialState = {
  entities: {},
  meta: { status: "idle", message: "" }
};

// async thunk creators
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await request.get("/users");
  return res;
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todosLoaded: (state, action) => {
      const todos = normalizeArray(action.payload, "id");
      state.entities = todos;
    },
    colorChanged: {
      reducer(state, action) {
        const { color, id } = action.payload;
        state.entities[id].color = color;
      },
      prepare(id, color) {
        return { payload: { id, color } };
      }
    },
    todoToggle: (state, action) => {
      const todoId = action.payload;
      state.entities[todoId].completed = !state.entities[todoId].completed;
    },
    todoDeleted: (state, action) => {
      delete state.entities[action.payload];
    },
    resetStatus: state => {
      state.meta.status = "idle";
      state.meta.message = "";
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.meta.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("fulfilled", action.payload);
        state.meta.status = "success";
        state.meta.message = "Successfully fetched users.";
        state.entities = normalizeArray(action.payload, "id");
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log("rejected", action);
        state.meta.status = "error";
        state.meta.message = action.error.message;
      });
  }
});

// exporting action creators
export const {
  todosLoaded,
  colorChanged,
  todoToggle,
  todoDeleted,
  resetStatus
} = todosSlice.actions;

// exporting the reducers
export default todosSlice.reducer;
