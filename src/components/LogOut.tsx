import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cookie from 'cookie';

import { makeStyles, createStyles } from '@material-ui/styles';
import { fetchAuth } from '../store/auth/actions';

const useStyles = makeStyles(() => createStyles({
  root: {
    textAlign: 'center',
  },
}));

const LogOut: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    document.cookie = cookie.serialize('token2', '');
    setTimeout(() => dispatch(fetchAuth()), 500);
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <h1>Logging Out</h1>
    </div>
  );
}

export default LogOut;
