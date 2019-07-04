import React from 'react';

import { ThemeProvider, makeStyles, createStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
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
        maxWidth: '400px'
      },
    },
  },
});

const useStyles = makeStyles((theme) => createStyles({
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
  loginButton: {
    width: '100%',
    maxWidth: '400px'
  },
  loginContainer: {
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
    paddingTop: '12px'
  },
}));

function LogIn() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid className={classes.container} container>
          <Grid className={classes.imageContainer} item xs={6}>
            <img className={classes.image} src="/assets/images/login.jpeg" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid className={classes.loginContainer} container direction="column" alignContent="center" spacing={4}>
              <Grid item>
                <Typography variant="h3">Log In</Typography>
              </Grid>
              <Grid item>
                <Grid className={classes.inputContainer} container direction="column" alignItems="flex-start">
                  <Grid className={classes.textField} item>
                  <TextField 
                    variant="outlined" 
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                  />
                  </Grid>
                  <Grid className={classes.textField} item>
                    <TextField 
                      variant="outlined" 
                      label="Password"
                      type="password"
                      name="password"
                    />
                  </Grid>
                  <Grid className={classes.checkbox} item>
                    <FormControlLabel 
                      control={
                        <Checkbox />
                      }
                      label="Remember Me"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button className={classes.loginButton} variant="contained" color="secondary">Log In</Button>
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
      </div>
    </ThemeProvider>
  )
}

export default LogIn;