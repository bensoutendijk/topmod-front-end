import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';



class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  async componentDidMount() {
    const user = await fetch('/api/auth/mixer/current');
    const userJson = await user.json();
    console.log(userJson);
  }

  render() {
    return (
      <div className="App">
        <Button><a href='/api/auth/mixer/login'>Login With Mixer</a></Button>
      </div>
    );
  }
}

export default App;
