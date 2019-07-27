import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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
    MuiButton: {
      outlinedPrimary: {
        color: '#F2F2F2',
        border: '1px solid #F2F2F2',
      },
    },
  },
});

const useStyles = makeStyles(() => createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: theme.spacing(2),
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  signupButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logoutButtonLabel: {
    color: theme.palette.primary.contrastText,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export interface Props {
  user: ILocalUser;
}

export default function Header(props: Props) {
  const classes = useStyles();
  const { user } = props;
  return (
    <section className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <Grid container className={classes.toolbar}>
              <Grid item>
                <Typography to="/" component={Link} className={classes.title} variant="h6">
                  topmod
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  { user ? (
                    null
                  ) : (
                    <Grid item>
                      <Button
                        to="/signup"
                        component={Link}
                        className={classes.signupButton}
                        color="secondary"
                        variant="contained"
                      >
                          Create an account
                      </Button>
                    </Grid>
                  )}
                  {user ? (
                    <Grid item>
                      <Button
                        to="/logout"
                        component={Link}
                        className={classes.signupButton}
                        color="primary"
                        variant="outlined"
                      >
                          Log Out
                      </Button>
                    </Grid>
                  ) : (
                    <Grid item>
                      <Button
                        to="/login"
                        component={Link}
                        className={classes.signupButton}
                        color="secondary"
                        variant="outlined"
                      >
                          Log In
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </section>
  );
}
