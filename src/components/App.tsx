import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import PageNotFound from './PageNotFound';
import Header from './Header';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Services from './Services';
import LogOut from './LogOut';

import { AppState } from '../store';
import { SystemState } from '../store/system/types';
import { AuthState } from '../store/auth/types';
import { fetchUser } from '../store/auth/actions';

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

function App() {
  const dispatch = useDispatch();

  const auth: AuthState = useSelector((state: AppState) => state.auth);
  const system: SystemState = useSelector((state: AppState) => state.system);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (system.isLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
          {auth.fetched ? (
            <Switch>
              <Route path="/services" component={Services} />
              <Route path="/logout" component={LogOut} />
              <Route component={PageNotFound} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Redirect to="/login" />
            </Switch>
          )}
      </ThemeProvider>
    )
  }
  return null;
}

export default App;
