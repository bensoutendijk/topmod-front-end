 
import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import ws from 'ws';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function DashboardPage(props) {
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
        <span style={roles.includes('Mod') ? { color: 'green' } : null }>{username}: </span>
        <span>{message}</span>
      </div>
    );
  }

  useEffect(() => {
    axios.get('/api/chat/mixer/history')
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
    axios.get('/api/chat/mixer/')
      .then((res) => {
        const { data } = res;
        const { user: { channelid, userid } } = profile;
        const socket = new MixerClient.Socket(ws, data.endpoints).boot();
        socket.auth(channelid, userid, chat.authkey);
        socket.on('error', (error) => {
          console.error('Socket error');
          console.error(error);
        });
    
        const events = [
          'ChatMessage',
          'DeleteMessage',
          'UserJoin',
          'UserLeave',
          'SkillAttribution',
        ];
        events.forEach((event) => {
          socket.on(event, (data) => {
            console.log('event: ' + event)  ,
            console.log('data: ' + JSON.stringify(data));  
            console.log('createdAt: ' + Date.now());
            console.log('updatedAt: ' + Date.now());
          });
        });
      })
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