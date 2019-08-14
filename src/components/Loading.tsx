import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100vw',
    height: '100vh',
  },
  loading: {
    fontSize: '2.125rem',
    '&::after': {
      overflow: 'hidden',
      display: 'inline-block',
      verticalAlign: 'bottom',
      WebkitAnimation: '$ellipsis steps(4,end) 900ms infinite',  
      animation: '$ellipsis steps(4,end) 900ms infinite',
      content: "'\\2026'",
      width: '0px',
    },
  },
  loadingText: {
    textAlign: 'center',
    marginTop: '20vh',
  },
  loadingAnimation: {
    textAlign: 'center',
  },
  
  '@keyframes ellipsis': {
    to: {
      width: '1.25em',    
    }
  },
  '@-webkit-keyframes ellipsis': {
    to: {
      width: '1.25em',  
    }
  },
}));

const Loading: React.FC = () => {
  const classes = useStyles({});

  return (
    <Grid className={classes.root}>
      <Grid item className={classes.loadingText}>
        <Typography variant="h4">Loading</Typography>
      </Grid>
      <Grid item className={classes.loadingAnimation}>
        <div className={classes.loading} />
      </Grid>
    </Grid>
  )
}

export default Loading;