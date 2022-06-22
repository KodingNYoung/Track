import { Button } from "antd";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";

// icons
import { FaTimes } from "react-icons/fa";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  todoToggle,
  colorChanged,
  todoDeleted,
  resetStatus,
  fetchTodos,
  addTodos
} from "../redux/features/test/todos";
import { toast } from "../components/Feedbacks/Toasts";

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
  const handleTodoAdd = e => {
    e.preventDefault();
    dispatch(addTodos(e.target.text.value));
    e.target.text.value = "";
  };
  const handleCallbackResponse = response => {
    const user = jwt_decode(response.credential);
    const { email, email_verified, family_name, given_name, picture } = user;
    console.log({
      email,
      password: null,
      third_party: true,
      email_verified,
      family_name,
      given_name,
      picture
    });
    toast(
      "success",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum voluptatibus repellendus sint nobis suscipit, neque dolorum esse maiores facere omnis sed atque commodi aut, ducimus id in earum repellat numquam consectetur culpa minima? Soluta unde praesentium eius, dolor, ipsum voluptatibus blanditiis ratione nemo est laboriosam sunt numquam tenetur. Debitis eum aperiam sit odio molestiae, ",
      true
    );
  };
  // useEffect
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    });
    window.google.accounts.id.renderButton(
      document.querySelector(".google-button"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <div className="h-screen flex items-center pt-20 flex-col">
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
          <form
            className="mt-3 flex items-center justify-center"
            onSubmit={handleTodoAdd}
          >
            <input name="text" id="text" placeholder="Enter your text." />
            <button type="submit">add</button>
          </form>
        </header>
        <ul className="grid my-10 gap-4 w-full">
          {todosId.map(todoId => (
            <TodoItem key={todoId} id={todoId} />
          ))}
        </ul>
      </div>
      <div className="google-button"></div>
      necessitatibus reiciendis dolorum, vero eos maxime corporis. Ad quisquam
      nihil cupiditate laudantium nostrum a provident necessitatibus id commodi
      nam cum voluptatibus rem libero fugit debitis ipsum ex porro dolorum
      perspiciatis modi dolorem inventore culpa, ullam natus? Sint repellendus
      temporibus laudantium dolorum assumenda necessitatibus quisquam maiores.
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
