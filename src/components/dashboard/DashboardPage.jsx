import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';
import { selectMixerChatMessages } from '../../selectors';


const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
}));

function DashboardPage() {
  const classes = useStyles();

  const mixerChat = useSelector(selectMixerChatMessages);

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
    <div className={classes.root}>
      {mixerChat ? (
        mixerChat.map(chatEvent => (
          <p>{renderChatMessage(chatEvent)}</p>
        ))
      ) : (
        null
      )}
    </div>
  );
}

export default DashboardPage;
