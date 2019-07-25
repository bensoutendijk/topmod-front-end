import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    textAlign: 'center',
  },
}));

function MixerModList(props) {
  const classes = useStyles();
  const { modList } = props;
  return (
    <div className={classes.root}>
      {modList.map(mod => <p key={mod.id}>{mod.username}</p>)}
    </div>
  );
}

export default MixerModList;
