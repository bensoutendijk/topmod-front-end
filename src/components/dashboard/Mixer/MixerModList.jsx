import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
}));

function MixerModList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    </div>
  );
}

export default MixerModList;
