import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation.jsx";
import SearchArtists from "../containers/SearchArtists/SearchArtists.jsx";
import LikedArtists from "../containers/LikedArtists/LikedArtists.jsx";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Spotify App</h2>
            <Navigation />
          </div>
          <Switch>
            <Route exact name="index" path="/" component={SearchArtists} />
            <Route
              name="liked-artists"
              path="/liked-artists"
              component={LikedArtists}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
