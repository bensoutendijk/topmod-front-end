import React from 'react';
import clsx from 'clsx';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
    textAlign: 'center',
  },
  active: {
    color: theme.palette.secondary.main,
  },
}));

function MixerModList(props) {
  const classes = useStyles();
  const { modList } = props;
  return (
    <div className={classes.root}>
      {modList.map(mod => (
        <p
          className={clsx({ [classes.active]: mod.active })}
          key={mod.id}
        >
          {mod.username}
        </p>
      ))}
    </div>
  );
}

export default MixerModList;
