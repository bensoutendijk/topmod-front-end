import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Theme, makeStyles, createStyles, ButtonBase } from '@material-ui/core';
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
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
    position  : 'relative',
    width: 'auto',
  },
  title: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    zIndex: 1,
  },
  authButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logoutButtonLabel: {
    color: theme.palette.primary.contrastText,
  },
  navButton: {
    textDecoration: 'none',
    color: 'grey'
  },
  navButtonBase: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1)
  },
  navButtonActive: {
    color: theme.palette.primary.contrastText
  }
}));

export default function Header() {
  const classes = useStyles();
  const auth = useSelector((state: AppState) => state.auth);

  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <Toolbar disableGutters>
          <Grid container className={classes.toolbar}>
            <Grid item>
              <Link className={classes.navButton} to="/">
                <Typography className={classes.title} variant="h6">
                  topmod
                </Typography>
              </Link>
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
                      color="primary"
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
                      className={classes.authButton}
                      color="primary"
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
        {auth.fetched ? (
          <Toolbar className="navigation" disableGutters>
            <Grid container className={classes.toolbar}>
              <Grid item>
                <NavLink
                  to="/services"
                  className={classes.navButton}
                  activeClassName={classes.navButtonActive}
                >
                    <ButtonBase className={classes.navButtonBase}>
                      <Typography variant="h6">Services</Typography>
                    </ButtonBase>
                </NavLink>
              </Grid>
            </Grid>
          </Toolbar>
        ) : (
          null
        )}
      </div>
    </header>
  );
}
