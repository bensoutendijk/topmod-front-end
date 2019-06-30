import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ModList from './ModList';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const { chatters, moderators } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={3}>
          <ModList chatters={chatters} moderators={moderators}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard;