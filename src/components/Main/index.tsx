import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Services from '../Services';
import ServiceNew from '../Services/ServiceNew';
import LogOut from '../LogOut';
import PageNotFound from '../PageNotFound';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import { AuthState } from '../../store/auth/types';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme, Paper } from '@material-ui/core';
import ServiceView from '../Services/ServiceView';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    '&::before': {
      background: theme.palette.secondary.main,
      content: "' '",
      display: 'block',
      height: '264px',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    }
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
    position  : 'relative',
    width: 'auto',
  }
}));

const Main: React.FC = () => {
  const classes = useStyles();

  const auth: AuthState = useSelector((state: AppState) => state.auth);
  
  return (
    <main className={classes.root}>
      <div className={classes.container}>
        <Paper>
          {auth.fetched ? (
            <Switch>
              <Route exact path="/services" component={Services} />
              <Route exact path="/services/new" component={ServiceNew} />
              <Route path="/services/:userId" component={ServiceView} />
              <Route exact path="/logout" component={LogOut} />
              <Redirect to="/services" />
              <Route component={PageNotFound} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Redirect to="/login" />
            </Switch>
          )}
        </Paper>
      </div>
    </main>
  )
}

export default Main;