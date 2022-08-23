import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { TodoApp } from "./TodoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PokemonApp/> */}
      <TodoApp/>
    </Provider>
  </React.StrictMode>
);
