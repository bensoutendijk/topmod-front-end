import React from 'react';
import { Route } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/styles';
import DashboardPage from './DashboardPage'
import ServicesPage from './ServicesPage';
import CalendarPage from './CalendarPage';


const useStyles = makeStyles((theme) => createStyles({
  root: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(4),
  },
}));

function Content(props) {
  const classes = useStyles();
  const { mixer } = props;

  return (
    <div className={classes.root}>
      <Route exact path="/dashboard" render={props => (
        <DashboardPage {...props} mixer={mixer} />
      )} />
      <Route path="/dashboard/services" render={props => (
        <ServicesPage {...props} mixer={mixer} />
      )} />
      <Route path="/dashboard/calendar" render={props => (
        <CalendarPage {...props} mixer={mixer} />
      )} />
    </div>
  )
}

export default Content;