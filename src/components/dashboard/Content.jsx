import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/styles';

import Mixer from './Mixer/Mixer';
import DashboardPage from './DashboardPage';
import ServicesPage from './ServicesPage';
import CalendarPage from './CalendarPage';

const useStyles = makeStyles(theme => createStyles({
  root: {
    marginLeft: '210px',
    width: 'calc(100% - 210px)',
    height: '100%',
    padding: theme.spacing(4),
  },
}));

function Content() {
  const classes = useStyles();
  const { user } = useSelector(state => state.auth);
  return (
    <div className={classes.root}>
      { user.services.includes('mixer') ? (
        <Mixer />
      ) : (
        null
      )}
      <Route
        exact
        path="/dashboard"
        render={
          props => (
            <DashboardPage {...props} />
          )
        }
      />
      <Route
        path="/dashboard/services"
        render={
          props => (
            <ServicesPage {...props} />
          )
        }
      />
      <Route
        path="/dashboard/calendar"
        render={
          props => (
            <CalendarPage {...props} />
          )
        }
      />
    </div>
  );
}

export default Content;
