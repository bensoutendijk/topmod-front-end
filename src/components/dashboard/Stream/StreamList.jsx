import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

import StreamView from './StreamView';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
  streamList: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  stream: {
    display: 'flex',
    alignItems: 'center',
    height: '300px',
    paddingBottom: '24px',
  },
  gameCover: {
    height: '150px',
  },
}));

function StreamList(props) {
  const classes = useStyles();
  const { streams } = props;

  return (
    <div className={classes.root}>
      <div className={classes.streamList}>
        {streams.map(stream => <StreamView key={stream.id} stream={stream} />)}
      </div>
    </div>
  );
}

export default StreamList;
