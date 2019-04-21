import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <iframe className="Channel" title="mixer-channel" src="https://mixer.com/embed/player/bgood"></iframe>
      </div>
    );
  }
}

export default App;
