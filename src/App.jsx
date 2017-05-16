import React, {Component} from 'react';
import {ArtistsList} from './components/ArtistsList/ArtistsList.jsx';
import SearchArtists from './containers/SearchArtists/SearchArtists.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React Spotify App</h2>
        </div>
        <SearchArtists/>
      </div>
    );
  }
}

export default App;
