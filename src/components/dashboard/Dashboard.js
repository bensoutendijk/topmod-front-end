import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;