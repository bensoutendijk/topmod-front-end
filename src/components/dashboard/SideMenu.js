import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    height: '100%',
    display: 'flex',
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

function SideMenu() {
  const classes = useStyles();

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
      
    </div>
  )
}

export default SideMenu;