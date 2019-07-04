import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingLeft: theme.spacing(2),
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
  }
}));

function Header(props) {
  const { user } = props;
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" >
            {user ? user.username : "topmod"}
          </Typography>
            {!user ? <a href='/api/auth/mixer/login'><Button className={classes.signupButton} color="secondary" variant="contained">Create an account</Button></a> : null}
        </Toolbar>
      </AppBar>
    </section>
  );
}

export default Header;