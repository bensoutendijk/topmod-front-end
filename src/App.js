import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

import Dashboard from './components/Dashboard';
import Header from './components/Header';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      moderators: [],
      chatters: [],
    }
  }

  async componentDidMount() {
    const user = await axios.get('/api/auth/mixer/current');
    if (user.status === 200) {
      setTimeout(async () => this.setState({ user: user.data}));
    }
    const moderators = await axios.get(`https://mixer.com/api/v1/channels/${user.data.channelid}/users/mod`);
    if (moderators.status === 200) {
      setTimeout(async () => this.setState({ moderators: moderators.data}));
    }
    console.log(moderators.data);
    const chatters = await axios.get(`https://mixer.com/api/v2/chats/${user.data.channelid}/users`);
    if (chatters.status === 200) {
      setTimeout(async () => this.setState({ chatters: chatters.data}));
    }
    console.log(chatters.data);
  }

  render() {
    const { user, moderators, chatters } = this.state;
    return (
      <div className="App">
        <Header user={user} />
        <Dashboard chatters={chatters} moderators={moderators}/>
      </div>
    );
  }
}

export default App;
