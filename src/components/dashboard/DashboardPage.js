import React from 'react';
import { useSelector } from 'react-redux';
import { selectMixerChatMessages } from '../../selectors';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function DashboardPage() {
  const classes = useStyles();
  const mixerChat = useSelector(selectMixerChatMessages);

  const renderChatMessage = (chatEvent) => {
    let message = '';
    const messageArray = chatEvent.data.message.message;
    const username = chatEvent.data.user_name;
    const roles = chatEvent.data.user_roles;
    messageArray.forEach((chatMessage) => {
      message = message + chatMessage.text;
    });
    return (
      <React.Fragment>
        <span style={roles.includes('Mod') ? { color: 'green' } : null }>{username}: </span>
        <span>{message}</span>
      </React.Fragment>
    );
  }

  // useEffect(() => {
  //   axios.get('/api/chat/mixer/')
  //     .then((res) => {
  //       const { data } = res;
  //       const socket = new MixerClient.Socket(ws, data.endpoints).boot();
  //       socket.auth(channelid, userid, chat.authkey);
  //       socket.on('error', (error) => {
  //         console.error('Socket error');
  //         console.error(error);
  //       });
  //       const events = [
  //         'ChatMessage',
  //         'DeleteMessage',
  //         'UserJoin',
  //         'UserLeave',
  //         'SkillAttribution',
  //       ];
  //       events.forEach((event) => {
  //         socket.on(event, (data) => {
  //           console.log('event: ' + event)  ,
  //           console.log('data: ' + JSON.stringify(data));  
  //           console.log('createdAt: ' + Date.now());
  //           console.log('updatedAt: ' + Date.now());
  //         });
  //       });
  //     })
  // }, [])

  return (
    <div className={classes.root}>
      {mixerChat ? (
          mixerChat.map((chatEvent, index) => (
            <p key={index}>{renderChatMessage(chatEvent)}</p>
          ))
        ) : (
          null
        )}
    </div>
  )
}

export default DashboardPage;