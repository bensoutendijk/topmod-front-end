import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import MixerChatMessage from './MixerChatMessage';

const useStyles = makeStyles(() => createStyles({
  root: {
    overflowY: 'auto',
  },
}));

function MixerChat(props) {
  const classes = useStyles();
  const { chat } = props;

  return (
    <div className={classes.root}>
      {chat ? (
        chat.map(chatEvent => (
          <MixerChatMessage key={chatEvent.id} chatEvent={chatEvent} />
        ))
      ) : (
        null
      )}
    </div>
  );
}

export default MixerChat;
