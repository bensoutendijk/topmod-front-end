import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';


const useStyles = makeStyles((theme: Theme) => createStyles({
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
  authButton: {
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

export default function Header() {
  const classes = useStyles();
  const auth = useSelector((state: AppState) => state.auth);

  return (
    <section className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Grid container className={classes.toolbar}>
            <Grid item>
              <Typography className={classes.title} variant="h6">
                topmod
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                { auth.fetched ? (
                  null
                ) : (
                  <Grid item>
                    <Button
                      to="/signup"
                      component={Link}
                      className={classes.authButton}
                      color="secondary"
                      variant="contained"
                    >
                        Create an account
                    </Button>
                  </Grid>
                )}
                {auth.fetched ? (
                  <Grid item>
                    <Button
                      to="/logout"
                      component={Link}
                      className={classes.authButton}
                      color="secondary"
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
                      className={classes.authButton}
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
      {auth.fetched ? (
        <Toolbar>
          <Grid container className={classes.toolbar}>

          </Grid>
        </Toolbar>
      ) : (
        null
      )}
    </section>
  );
}
