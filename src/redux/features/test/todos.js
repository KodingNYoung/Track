import { createSlice } from "@reduxjs/toolkit";
import { normalizeArray } from "../../../utils";

// async thunk creators
import { fetchTodos, addTodos } from "./actionCreators";

const initialState = {
  entities: {},
  meta: { status: "idle", message: "" }
};

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
  // reducers for async actions
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.meta.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.meta.status = "success";
        state.meta.message = "Successfully fetched users.";
        state.entities = normalizeArray(action.payload, "id");
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.meta.status = "error";
        state.meta.message = action.error.message;
      })
      .addCase(addTodos.pending, state => {
        state.meta.status = "loading";
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.meta.status = "success";
        state.meta.message = "Added user!";
        state.entities[action.payload] = {
          id: action.payload.id,
          name: action.meta.arg
        };
      })
      .addCase(addTodos.rejected, (state, action) => {
        state.meta.status = "error";
        state.meta.message = action.error.message;
      });
  }
});

// async thunk actions
export { fetchTodos, addTodos };
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
