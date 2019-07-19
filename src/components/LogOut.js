import React, { useEffect } from 'react';
import { logoutUser } from '../actions/index';
import { useDispatch } from 'react-redux'
import cookie from 'cookie';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function LogOut() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    document.cookie = cookie.serialize('token2', null);
    dispatch(logoutUser());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <h1>Logging Out</h1>
    </div>
  )
}

export default LogOut;