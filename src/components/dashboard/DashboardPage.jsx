import React, { useState, useEffect, useRef } from 'react';
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
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  dashboardColumn: {
    height: '80vh',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}));

function DashboardPage() {
  const classes = useStyles();

  const mixerChat = useSelector(state => state.mixer.chat);
  const mixerStreams = useSelector(state => state.mixer.streams);
  const mixerModList = useSelector(state => state.mixer.modList);

  const onlineMods = mixerModList.data.filter(mod => mod.active);
  const offlineMods = mixerModList.data.filter(mod => !mod.active);

  const [scrolled, setScrolled] = useState(false);

  const messagesEndRef = useRef(null);
  const chatColumnRef = useRef(null);

  useEffect(() => {
    const chatColumn = chatColumnRef.current;

    const handleScroll = () => {
      if (chatColumn.scrollTop + chatColumn.offsetHeight === chatColumn.scrollHeight) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    chatColumn.addEventListener('scroll', handleScroll);
    return () => chatColumn.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    if (!scrolled) {
      scrollToBottom();
    }
  }, [mixerChat.data, scrolled]);

  return (
    <Grid className={classes.root} container justify="space-around">
      <Grid item md={12}>
        <Grid container justify="center">
          <DateSelector />
        </Grid>
      </Grid>
      <Grid item md={4}>
        <h4 style={{ textAlign: 'center' }}>Chat</h4>
        <div className={classes.dashboardColumn} ref={chatColumnRef}>
          {mixerChat.fetched ? (
            <MixerChat chat={mixerChat.data} />
          ) : (
            null
          )}
          <div ref={messagesEndRef} />
        </div>
      </Grid>
      <Grid item md={4}>
        <h4 style={{ textAlign: 'center' }}>Recent Streams</h4>
        <div className={classes.dashboardColumn}>
          {mixerStreams.fetched ? (
            <StreamList streams={mixerStreams.data.slice(-3)} />
          ) : (
            null
          )}
        </div>
      </Grid>
      <Grid item md={4}>
        <h4 style={{ textAlign: 'center' }}>Moderators</h4>
        <div className={classes.dashboardColumn}>
          {mixerModList.fetched ? (
            <>
              <h5>Online</h5>
              <MixerModList online modList={onlineMods} />
              <h5>Offline</h5>
              <MixerModList offline modList={offlineMods} />
            </>
          ) : (
            null
          )}
        </div>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
