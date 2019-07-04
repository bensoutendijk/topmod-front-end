import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import SplashPage from './components/SplashPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#28282a',
      contrastText: '#F2F2F2',
    },
    secondary: {
      light: '#F2E0D0',
      main: '#F25757',
      contrastText: '#F2F2F2',
    },
    text: {
      primary: '#F2F2F2'
    },
  },
  
  status: {
    danger: 'orange',
  },
});

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: undefined,
      moderators: [],
      chatters: [],
      chat: [],
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
    const chatters = await axios.get(`https://mixer.com/api/v2/chats/${user.data.channelid}/users`);
    if (chatters.status === 200) {
      setTimeout(async () => this.setState({ chatters: chatters.data}));
    }
    const chat = await axios.get(`/api/chat/mixer/${user.data.userid}`);
    if (chat.status === 200) {
      setTimeout(async () => this.setState({ chat: chat.data}));
    }
  }

  render() {
    const { user, moderators, chatters, chat } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header user={user} />
          {user ? <Dashboard chatters={chatters} moderators={moderators} chat={chat} /> : <SplashPage />}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
