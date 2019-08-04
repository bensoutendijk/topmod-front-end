import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginAuth } from '../store/auth/actions';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100%',
    flexGrow: 1,
  },
  container: {
    height: '100%',
  },
  imageContainer: {
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  image: {
    borderRadius: '4px 0px 0px 4px',
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
  },
  loginButton: {
    paddingTop: theme.spacing(4),
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginContainer: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  textField: {
    paddingTop: '12px',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function LogIn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(loginAuth(user));
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid className={classes.container} container>
          <Grid className={classes.imageContainer} item xs={6}>
            <img className={classes.image} src="/assets/images/login.jpg" alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid className={classes.loginContainer} container direction="column" alignItems="stretch" spacing={4}>
              <Grid item>
                <Typography variant="h3">Log In</Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" alignItems="stretch">
                    <Grid className={classes.textField} item>
                      <TextField
                        autoFocus
                        fullWidth
                        variant="outlined"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                      />
                    </Grid>
                    <Grid className={classes.textField} item>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                      />
                    </Grid>
                    <Grid className={classes.loginButton} item>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Log In
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Grid container direction="row" justify="space-between">
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <Link to="/signup">No account? Sign up!</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default LogIn;
