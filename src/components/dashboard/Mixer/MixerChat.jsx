import uuid from 'uuid';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
  chatLog: {
    height: 'calc(100vh - 160px)',
    overflowY: 'auto',
  },
}));

function MixerChat() {
  const classes = useStyles();

  const mixerChat = useSelector(state => state.mixer.chat.data);

  const renderChatMessage = (chatEvent) => {
    let message = '';
    const messageArray = chatEvent.message.message;
    const username = chatEvent.user_name;
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
      <div className={classes.chatLog}>
        {mixerChat ? (
          mixerChat.map(chatEvent => (
            <p key={uuid.v4()}>{renderChatMessage(chatEvent)}</p>
          ))
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default MixerChat;
