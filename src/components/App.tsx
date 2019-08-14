import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Header from './Header';
import Main from './Main';

import { fetchAuth } from '../store/auth/actions';
import Loading from './Loading';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF5F5F',
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: '#252A2B',
      light: '#B1B1B1',
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

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getAuth = async () => {
      await dispatch(fetchAuth());
    }

    getAuth()
    .then(() => setIsLoaded(true));
    
  }, [dispatch]);

  if(!isLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  )
}

export default App;
