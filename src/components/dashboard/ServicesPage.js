import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function ServicesPage(props) {
  const classes = useStyles();

  const { mixer } = props;

  return (
    <div className={classes.root}>
      <h1>Services</h1>
      {mixer ? (
        <p>mixer connected</p>
      ) : (
        <a href="/api/auth/mixer/login">connect mixer</a>
      )}
    </div>
  )
}

export default ServicesPage;