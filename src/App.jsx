import React, {Component} from 'react';
import {ArtistsList} from './components/ArtistsList/ArtistsList.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    artists: [
      {
        id: 1,
        name: 'John Vall',
        photo: 'http://placehold.it/150x150',
        genres: ['rap', 'hip hop']
      }, {
        id: 2,
        name: 'Adam Nolte',
        photo: 'http://placehold.it/150x150',
        genres: ['country', 'folk']
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React Spotify App</h2>
        </div>
        <ArtistsList artists={this.state.artists}/>
      </div>
    );
  }
}

export default App;
