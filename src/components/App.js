import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUser } from '../actions/index';
import { Route, Switch, Redirect } from "react-router-dom";
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector(state => state.auth.user);
  const isLoaded = true;
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
                      <LogIn {...props} />
                    )
                  )} />
                  <Route exact path="/logout" render={props => (
                    user ? (
                      <LogOut {...props} />
                    ) : (
                      <Redirect to="/" />
                    )
                  )} />
                  <Route exact path="/signup" render={props => (
                    user ? (
                      <Redirect to="/" />
                    ) : (
                      <SignUp {...props} />
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
