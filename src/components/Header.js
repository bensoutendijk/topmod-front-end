import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({
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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

function Header(props) {
  const { user } = props;
  const classes = useStyles();
  return (
    <section className={classes.root}>
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
                      variant="contained">
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
                      variant="outlined">
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
                      variant="outlined">
                        Log In
                    </Button>
                  </Grid> 
                  
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </section>
  );
}

export default Header;