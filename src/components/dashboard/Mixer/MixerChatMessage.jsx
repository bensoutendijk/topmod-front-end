import React from 'react';

function MixerChatMessage(props) {
  const { chatEvent } = props;
  let message = '';
  const messageArray = chatEvent.message.message;
  const username = chatEvent.user_name;
  messageArray.forEach((chatMessage) => {
    message += chatMessage.text;
  });
  return (
    <p>
      <span>{`${username}: `}</span>
      <span>{message}</span>
    </p>
  );
}

export default MixerChatMessage;
