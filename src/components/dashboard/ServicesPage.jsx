import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
}));

function ServicesPage() {
  const classes = useStyles();
  const mixer = useSelector(state => state.mixer.user);

  return (
    <div className={classes.root}>
      <h1>Services</h1>
      {mixer ? (
        <React.Fragment>
          <p>Mixer Connected</p>
          <a href="/api/auth/mixer/login">Reconnect Mixer</a>
        </React.Fragment>
      ) : (
        <a href="/api/auth/mixer/login">Connect Mixer</a>
      )}
    </div>
  );
}

export default ServicesPage;
