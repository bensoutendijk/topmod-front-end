import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import MixerChatMessage from './MixerChatMessage';

const useStyles = makeStyles(() => createStyles({
  root: {

  },
  chatLog: {
    height: 'calc(100vh - 160px)',
    overflowY: 'auto',
  },
}));

function MixerChat(props) {
  const classes = useStyles();
  const { chat } = props;

  return (
    <div className={classes.root}>
      <div className={classes.chatLog}>
        {chat ? (
          chat.map(chatEvent => (
            <MixerChatMessage key={chatEvent.id} chatEvent={chatEvent} />
          ))
        ) : (
          null
        )}
      </div>
    </div>
  );
}

export default MixerChat;
