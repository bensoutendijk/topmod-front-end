import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function LogIn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Log In</h1>
    </div>
  )
}

export default LogIn;