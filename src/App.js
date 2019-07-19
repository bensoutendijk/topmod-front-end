import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';

import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SideMenu from './components/dashboard/SideMenu';
import Header from './components/Header';
import SplashPage from './components/SplashPage';
import PageNotFound from './components/PageNotFound';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';
import Content from './components/dashboard/Content';

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
      primary: '#020202',
      secondary: '#F2F2F2',
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
  root: {
    height: '100%',
  },
  content: {
    height: '100%',
    marginTop: '64px',
  },
}));

function App() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('/api/auth/local/current')
    .then(async (res) => {
      const { data } = res;
      await setUser(data);
      setIsLoaded(true);
    })
    .catch(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
          {isLoaded ? (
            <div className="App">
              <Header user={user} />
              <div className={classes.content}>
                <Switch>
                  <Route path="/dashboard" render={props => (
                    user ? (
                      <React.Fragment>
                        <SideMenu {...props} />
                        <Content mixer={mixer} />
                      </React.Fragment>
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
          ) : (
            null
          )}
      </div>
    </ThemeProvider>
  );
}

export default App;
