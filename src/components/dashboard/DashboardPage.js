import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateMixerChat } from '../../actions';

import { selectMixerChatMessages } from '../../selectors';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => createStyles({

}));

function DashboardPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const mixerChat = useSelector(selectMixerChatMessages);
  const mixerUser = useSelector(state => state.mixer.user);
  const chatClient = useSelector(state => state.mixer.chatClient);

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

  useEffect(() => {
    if (chatClient.fetched) {
      const socket = new WebSocket(chatClient.data.endpoints);
      
      socket.addEventListener('open', function (event) {
        const auth = {
          type: "method",
          method: "auth",
          arguments: [mixerUser.data.channelid, mixerUser.data.userid, chatClient.data.authkey]
        }
        socket.send(JSON.stringify(auth));
      });

      
      socket.addEventListener('message', function ({ data: json }) {
        const data = JSON.parse(json);
        if (data.event === 'ChatMessage') {
          dispatch(updateMixerChat(data));
        }
      });
    }
  }, [chatClient.fetched]);

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