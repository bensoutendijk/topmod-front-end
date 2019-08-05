import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createAuth } from '../store/auth/actions';
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
    height: '100%',
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
  signupButton: {
    paddingTop: theme.spacing(4),
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signupContainer: {
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

function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const user = {
      email,
      password,
      passwordConfirmation,
    };
    dispatch(createAuth(user))
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid className={classes.container} container>
          <Grid className={classes.imageContainer} item xs={6}>
            <img className={classes.image} src="/assets/images/signup.jpg" alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid className={classes.signupContainer} container direction="column" alignItems="stretch" spacing={4}>
              <Grid item>
                <Typography variant="h3">Sign Up</Typography>
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
                    <Grid className={classes.textField} item>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        name="password-confirmation"
                        value={passwordConfirmation}
                        onChange={event => setPasswordConfirmation(event.target.value)}
                      />
                    </Grid>
                    <Grid className={classes.signupButton} item>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Create Account
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Grid container direction="row" justify="flex-end">
                  <Link to="/login">Already have an account? Log In!</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default SignUp;
