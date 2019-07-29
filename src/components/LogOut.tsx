import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cookie from 'cookie';

import { makeStyles, createStyles } from '@material-ui/styles';

import { logoutLocalUser } from '../store/auth/actions';

const useStyles = makeStyles(() => createStyles({
  root: {
    textAlign: 'center',
  },
}));

function LogOut() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    document.cookie = cookie.serialize('token2', '');
    dispatch(logoutLocalUser());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <h1>Logging Out</h1>
    </div>
  );
}

export default LogOut;
