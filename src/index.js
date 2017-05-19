import React from "react";
import { render } from "react-dom";
import "./index.css";

import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./App";

const store = configureStore();

render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root"));
//lol
