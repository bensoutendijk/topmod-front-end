import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMixerUser,
  fetchMixerViewers,
  fetchMixerChatClient,
  fetchMixerChatHistory,
  fetchMixerChatMods,
} from '../../../store/mixer/thunks';

import { updateMixerChat } from '../../../store/mixer/actions';

function Mixer() {
  const dispatch = useDispatch();

  const mixerUser = useSelector(state => state.mixer.user);
  const chatClient = useSelector(state => state.mixer.chatClient);

  useEffect(() => {
    dispatch(fetchMixerUser());
  }, [dispatch]);

  // useEffect(() => {
  //   const fetchMixerStreams = async () => {
  //     await dispatch(fetchMixerStreams());
  //   };

  //   fetchMixerStreams();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMixerChatMods());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMixerViewers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMixerChatHistory());
  }, [dispatch]);

  useEffect(() => {
    const connectMixerChat = () => {
      const socket = new WebSocket(chatClient.data.endpoints);

      socket.addEventListener('open', () => {
        const auth = {
          type: 'method',
          method: 'auth',
          arguments: [mixerUser.data.channelid, mixerUser.data.userid, chatClient.data.authkey],
        };
        socket.send(JSON.stringify(auth));
      });

      socket.addEventListener('message', ({ data: json }) => {
        const { data, event } = JSON.parse(json);
        if (event === 'ChatMessage') {
          dispatch(updateMixerChat(data));
        }
      });

      return socket;
    };

    if (mixerUser.fetched) {
      dispatch(fetchMixerChatClient());
      if (chatClient.fetched) {
        const socket = connectMixerChat();
        return (() => {
          socket.close();
        });
      }
    }

    return (() => {});
    /* eslint-disable-next-line */
  }, [mixerUser.fetched, chatClient.fetched]);

  return (
    <React.Fragment />
  );
}

export default Mixer;
