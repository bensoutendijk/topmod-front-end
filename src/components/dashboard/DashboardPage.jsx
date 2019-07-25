import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';

import MixerChat from './Mixer/MixerChat';
import MixerModList from './Mixer/MixerModList';
import DateSelector from './DateSelector';
import StreamList from './Stream/StreamList';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
}));

function DashboardPage() {
  const classes = useStyles();

  const mixerChat = useSelector(state => state.mixer.chat);
  const mixerStreams = useSelector(state => state.mixer.streams);
  const mixerModList = useSelector(state => state.mixer.modList);

  return (
    <Grid className={classes.root} container justify="space-around">
      <Grid item md={12}>
        <Grid container justify="center">
          <DateSelector />
        </Grid>
      </Grid>
      <Grid item md={4}>
        <h4 style={{ textAlign: 'center' }}>Chat</h4>
        {mixerChat.fetched ? (
          <MixerChat chat={mixerChat.data} />
        ) : (
          null
        )}
      </Grid>
      <Grid item md={4}>
        <h4 style={{ textAlign: 'center' }}>Recent Streams</h4>
        {mixerStreams.fetched ? (
          <StreamList streams={mixerStreams.data.slice(-3)} />
        ) : (
          null
        )}
      </Grid>
      <Grid item md={4}>
        <h4 style={{ textAlign: 'center' }}>Moderators</h4>
        {mixerModList.fetched ? (
          <MixerModList modList={mixerModList.data} />
        ) : (
          null
        )}
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
