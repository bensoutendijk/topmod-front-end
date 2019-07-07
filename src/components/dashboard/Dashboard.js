import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import { makeStyles, createStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ServicesPage from './ServicesPage';
import CalendarPage from './CalendarPage';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
  },
  content: {
    width: '100%',
    padding: theme.spacing(4),
  },
  drawer: {
    width: '210px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '210px',
    color: '#020202'
  },
  toolbar: theme.mixins.toolbar,
}));

function Dashboard() {
  const classes = useStyles();

  const [mixer, setMixer] = useState(null);

  useEffect(() => {
    axios.get('/api/auth/mixer/current')
    .then((res) => {
      const { data } = res;
      setMixer(data);
    })
  });
  return (
    <div className={classes.root}>
      <Drawer 
        variant="permanent" 
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/reports">
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/calendar">
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/mods">
            <ListItemText primary="Mods" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/services">
            <ListItemText primary="Services" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/account/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.content}>
        <Route exact path="/dashboard" render={props => (
          <h1>Dashboard</h1>
        )} />
        <Route path="/dashboard/services" render={props => (
          <ServicesPage {...props} mixer={mixer} />
        )} />
        <Route path="/dashboard/calendar" render={props => (
          <CalendarPage {...props} mixer={mixer} />
        )} />
      </div>
    </div>
  )
}

export default Dashboard;