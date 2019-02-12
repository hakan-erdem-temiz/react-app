/* 
The store is a place that holds the app's state.
It is very easy to create a store once you have reducers. 
We are passing store property to the provider element, which wraps our route component.
*/
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "./reducers/reducers";

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
