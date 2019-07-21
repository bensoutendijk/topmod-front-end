import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';

import { selectMixerChatMessages } from '../../selectors';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
}));

function DashboardPage() {
  const classes = useStyles();

  const mixerChat = useSelector(selectMixerChatMessages);
  const modList = useSelector(state => state.mixer.modList.data);

  const renderChatMessage = (chatEvent) => {
    let message = '';
    const messageArray = chatEvent.data.message.message;
    const username = chatEvent.data.user_name;
    messageArray.forEach((chatMessage) => {
      message += chatMessage.text;
    });
    return (
      <React.Fragment>
        <span>{`${username}: `}</span>
        <span>{message}</span>
      </React.Fragment>
    );
  };

  return (
    <Grid className={classes.root} container>
      <Grid item md={6}>
        <h4>Chat</h4>
        {mixerChat ? (
          mixerChat.map(chatEvent => (
            <p>{renderChatMessage(chatEvent)}</p>
          ))
        ) : (
          null
        )}
      </Grid>
      <Grid item>
        <h4>Mods</h4>
        {modList ? (
          modList.map(mod => (
            <p>{mod.username}</p>
          ))
        ) : (
          null
        )}
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
