import React from 'react';
import clsx from 'clsx';

import { makeStyles, createStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => createStyles({
  root: {
  },
  active: {
    color: theme.palette.secondary.main,
  },
  online: {

  },
  offline: {
    color: theme.palette.text.secondary,
  },
}));

function MixerModList(props) {
  const classes = useStyles();
  const { modList, offline } = props;

  if (modList.length === 0) {
    return (
      <List>
        <ListItem>
          <Typography className={classes.offline}>No Mods Active</Typography>
        </ListItem>
      </List>
    );
  }

  return (
    <List className={clsx({ [classes.root]: true }, { [classes.offline]: offline })}>
      {modList.map(mod => (
        <ListItem key={mod.id}>
          <Typography
            className={clsx({ [classes.active]: mod.active })}
          >
            {mod.username}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default MixerModList;
