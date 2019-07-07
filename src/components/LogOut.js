import React, { useEffect } from 'react';
import cookie from 'cookie';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function LogOut(props) {
  const classes = useStyles();
  const { setUser } = props;

  useEffect(() => {
    document.cookie = cookie.serialize('token2', null);
    setUser(null);
  }, []);

  return (
    <div className={classes.root}>
      <h1>Logging Out</h1>
    </div>
  )
}

export default LogOut;