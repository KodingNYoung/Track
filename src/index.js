import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { colorChanged, todosLoaded } from "./redux/features/test/todos";

// load the store with the beginning list
store.dispatch(
  todosLoaded([
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "#ff00ff" },
    { id: 2, text: "Build something fun!", completed: false, color: "#0000ff" }
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
