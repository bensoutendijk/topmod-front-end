import React, { useEffect, useState } from 'react';
import axios  from 'axios';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function DashboardPage() {
  const classes = useStyles();

  const [chat, setChat] = useState([]);

  const renderChatMessage = (chatEvent) => {
    let message = '';
    const messageArray = chatEvent.data.message.message;
    const username = chatEvent.data.user_name;
    const roles = chatEvent.data.user_roles;
    messageArray.forEach((chatMessage) => {
      message = message + chatMessage.text;
    });
    return (
      <div>
        <span style={roles.includes('Mod') ? { color: 'green' } : null }>{username} </span>
        <span>{message}</span>
      </div>
    );
  }

  useEffect(() => {
    axios.get('/api/chat/mixer')
      .then((res) => {
        const { data } = res;
        const chat = data.filter((chatEvent) => (
          chatEvent.event === "ChatMessage"
        ))
        setChat(chat);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className={classes.root}>
      {chat.map((chatEvent) => (
        <p>{renderChatMessage(chatEvent)}</p>
      ))}
    </div>
  )
}

export default DashboardPage;