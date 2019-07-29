import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import PageNotFound from './PageNotFound';
import LogIn from './LogIn';
import SignUp from './SignUp';
import LogOut from './LogOut';

import { AppState } from '../store';
import { thunkGetLocalUser } from '../store/auth/thunks';
import { LocalUserState } from '../store/auth/types';

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
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(thunkGetLocalUser());
    };

    fetchUser();
  }, [dispatch]);

  const auth: LocalUserState = useSelector((state: AppState) => state.auth);

  if (auth.fetched) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className={classes.toolbar} />
        <Switch>
          <Route component={PageNotFound} />
        </Switch>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.toolbar} />
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
