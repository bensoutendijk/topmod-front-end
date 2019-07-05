import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './components/dashboard/Dashboard';
import Header from './components/Header';
import SplashPage from './components/SplashPage';
import PageNotFound from './components/PageNotFound';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

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

  render() {
    const { user, moderators, chatters, chat } = this.state;
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header user={user} />
            <Switch>
              <Route 
                path="/dashboard"
                render={props => <Dashboard {...props} chatters={chatters} moderators={moderators} chat={chat} />} 
              />
              <Route exact path="/login" component={LogIn}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/" render={() => (
                user ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <SplashPage/>
                )
              )}/>
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
