import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { thunkCreateLocalUser } from '../store/localUser/thunks';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  overrides: {
    MuiGrid: {
      item: {
        width: '100%',
        maxWidth: '400px',
      },
    },
    MuiTextField: {
      root: {
        width: '80%',
        maxWidth: '400px',
      },
    },
  },
});

const useStyles = makeStyles(() => createStyles({
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
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  signupButton: {
    width: '100%',
    maxWidth: '400px',
  },
  signupContainer: {
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  inputContainer: {
    margin: 'auto',
    width: '80%',
    maxWidth: '400px',
  },
  checkbox: {
    display: 'flex',
    paddingLeft: '10%',
  },
  textField: {
    paddingTop: '12px',
  },
}));

function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
      passwordConfirmation,
    };
    dispatch(thunkCreateLocalUser(user));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid className={classes.container} container>
          <Grid className={classes.imageContainer} item xs={6}>
            <img className={classes.image} src="/assets/images/signup.jpg" alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid className={classes.signupContainer} container direction="column" alignContent="center" spacing={4}>
              <Grid item>
                <Typography variant="h3">Sign Up</Typography>
              </Grid>
              <form onSubmit={handleSubmit}>
                <Grid item>
                  <Grid className={classes.inputContainer} container direction="column" alignItems="flex-start">
                    <Grid className={classes.textField} item>
                      <TextField
                        autoFocus
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
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        name="password-confirmation"
                        value={passwordConfirmation}
                        onChange={event => setPasswordConfirmation(event.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <br />
                <Grid item>
                  <Button
                    className={classes.signupButton}
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Grid>
              </form>
              <Grid item>
                <Grid container direction="row" justify="flex-end">
                  <Link to="/login">Already have an account? Log In!</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default SignUp;
