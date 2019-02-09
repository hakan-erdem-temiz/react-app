import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "./reducers/reducers";

let store = createStore(todoApp);
let rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
