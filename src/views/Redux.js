import { Button } from "antd";
import React from "react";

// icons
import { FaTimes } from "react-icons/fa";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  todoToggle,
  colorChanged,
  todoDeleted,
  fetchTodos,
  resetStatus
} from "../redux/features/test/todos";

const Redux = () => {
  const dispatch = useDispatch();

  // selectors
  const todosId = useSelector(state => Object.keys(state.todos.entities));
  const itemsStatus = useSelector(state => state.todos.meta.status);
  const fetchMessage = useSelector(state => state.todos.meta.message);

  // functions
  const fetchAllTodos = () => {
    dispatch(fetchTodos());
  };
  const handleStatusReset = () => {
    dispatch(resetStatus());
  };

  return (
    <div className="h-screen flex items-center mt-20 flex-col">
      <div className="w-80 max-w-full">
        <header>
          <span className="flex justify-between ">
            <h2 className="text-2xl">Users</h2>
            <Button onClick={fetchAllTodos}>Get users</Button>
          </span>
          {itemsStatus !== "idle" ? (
            <span className="flex justify-between w-full items-center my-2">
              {itemsStatus === "loading" ? (
                <span>loading...</span>
              ) : (
                <>
                  <span>{fetchMessage}</span>
                  <Button className="border-0" onClick={handleStatusReset}>
                    <FaTimes />
                  </Button>
                </>
              )}
            </span>
          ) : null}
        </header>
        <ul className="grid my-10 gap-4 w-full">
          {todosId.map(todoId => (
            <TodoItem key={todoId} id={todoId} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const TodoItem = props => {
  const dispatch = useDispatch();
  // props
  const { id } = props;

  // selectors
  const todoItem = useSelector(state => {
    return state.todos.entities[id];
  });

  // functions
  const onColorChange = e => {
    dispatch(colorChanged(id, e.target.value));
  };
  const handleTodoToggle = () => {
    dispatch(todoToggle(id));
  };
  const handleTodoDelete = () => {
    dispatch(todoDeleted(id));
  };
  return (
    <li className="flex justify-between items-center">
      <span
        style={{
          textDecoration: todoItem.completed ? "line-through" : "none"
        }}
      >
        {todoItem.name}
      </span>
      <input
        type="color"
        name="color"
        id="color"
        onChange={onColorChange}
        value={todoItem.color || "#000000"}
      />
      <button onClick={handleTodoToggle}>
        {todoItem.completed ? "undone" : "done"}
      </button>
      <button onClick={handleTodoDelete}>delete</button>
    </li>
  );
};

export default Redux;
