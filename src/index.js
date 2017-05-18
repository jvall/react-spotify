import React from "react";
import { render } from "react-dom";
import "./index.css";

import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./components/App";
import SearchArtists from "./containers/SearchArtists/SearchArtists.jsx";
import LikedArtists from "./containers/LikedArtists/LikedArtists.jsx";

const store = configureStore();

render(
  <Provider store={store}> <App /> </Provider>,
  document.getElementById("root")
);
