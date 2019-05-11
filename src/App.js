import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button><a href='/api/auth/mixer/login'>Login With Mixer</a></Button>
      </div>
    );
  }
}

export default App;
