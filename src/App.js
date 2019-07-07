import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Dashboard from './components/dashboard/Dashboard';
import Header from './components/Header';
import SplashPage from './components/SplashPage';
import PageNotFound from './components/PageNotFound';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';

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
  overrides: {
    MuiPaper: {
      root: {
        color: '#020202'
      }
    },
    MuiButton: {
      root: {
        color: '#020202'
      }
    }
  },
  status: {
    danger: 'orange',
  },
});

const useStyles = makeStyles((theme) => createStyles({
  content: {
    marginTop: '64px',
  },
}));

function App() {
  const classes = useStyles();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/auth/local/current')
    .then((res) => {
      const { data } = res;
      setUser(data);
    });
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header user={user} />
          <div className={classes.content}>
            <Switch>
              <Route path="/dashboard" render={props => (
                user ? (
                  <Dashboard {...props} />
                ) : (
                  <Redirect to="/" />
                )
              )} />
              <Route exact path="/login" render={props => (
                user ? (
                  <Redirect to="/" />
                ) : (
                  <LogIn {...props} setUser={setUser} />
                )
              )} />
              <Route exact path="/logout" render={props => (
                user ? (
                  <LogOut {...props} setUser={setUser} />
                ) : (
                  <Redirect to="/" />
                )
              )} />
              <Route exact path="/signup" render={props => (
                user ? (
                  <Redirect to="/" />
                ) : (
                  <SignUp {...props} setUser={setUser} />
                )
              )} />
              <Route exact path="/" render={() => (
                user ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <SplashPage/>
                )
              )} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
