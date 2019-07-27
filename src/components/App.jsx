import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SideMenu from './dashboard/SideMenu';
import Header from './Header';
import SplashPage from './SplashPage';
import PageNotFound from './PageNotFound';
import LogIn from './LogIn';
import SignUp from './SignUp';
import LogOut from './LogOut';
import Content from './dashboard/Content';

import { getUser } from '../actions';

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
      secondary: '#b2b2b2',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        color: '#020202',
      },
    },
    MuiButton: {
      root: {
        color: '#020202',
      },
    },
  },
});

const useStyles = makeStyles(() => createStyles({
  root: {
  },
  content: {
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(getUser());
    };

    fetchUser();
  }, [dispatch]);

  const auth = useSelector(state => state.auth);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Header auth={auth} />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route
              path="/dashboard"
              render={
                props => (
                  auth.fetched ? (
                    <React.Fragment>
                      <SideMenu {...props} />
                      <Content />
                    </React.Fragment>
                  ) : (
                    <Redirect to="/" />
                  )
                )
              }
            />
            <Route
              path="/account"
              render={
                props => (
                  auth.fetched ? (
                    <React.Fragment>
                      <SideMenu {...props} />
                      <Content />
                    </React.Fragment>
                  ) : (
                    <Redirect to="/" />
                  )
                )
              }
            />
            <Route
              exact
              path="/login"
              render={
                props => (
                  auth.fetched ? (
                    <Redirect to="/" />
                  ) : (
                    <LogIn {...props} />
                  )
                )
              }
            />
            <Route
              exact
              path="/logout"
              render={
                props => (
                  auth.fetched ? (
                    <LogOut {...props} />
                  ) : (
                    <Redirect to="/" />
                  )
                )
              }
            />
            <Route
              exact
              path="/signup"
              render={
                props => (
                  auth.fetched ? (
                    <Redirect to="/" />
                  ) : (
                    <SignUp {...props} />
                  )
                )
              }
            />
            <Route
              exact
              path="/"
              render={
                () => (
                  auth.fetched ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <SplashPage />
                  )
                )
              }
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
