import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getMixerStreams,
  getMixerUser,
  getMixerModList,
  getMixerViewers,
  getMixerChatHistory,
  getMixerChat,
  updateMixerChat,
} from '../../../actions';

function Mixer() {
  const dispatch = useDispatch();

  const mixerUser = useSelector(state => state.mixer.user);
  const chatClient = useSelector(state => state.mixer.chatClient);

  useEffect(() => {
    const fetchMixer = async () => {
      await dispatch(getMixerUser());
    };

    fetchMixer();
  }, [dispatch]);

  useEffect(() => {
    const fetchMixerStreams = async () => {
      await dispatch(getMixerStreams());
    };

    fetchMixerStreams();
  }, [dispatch]);

  useEffect(() => {
    const fetchMixerModList = async () => {
      await dispatch(getMixerModList());
    };

    fetchMixerModList();
  }, [dispatch]);

  useEffect(() => {
    const fetchMixerViewers = async () => {
      await dispatch(getMixerViewers());
    };

    fetchMixerViewers();
  }, [dispatch]);

  useEffect(() => {
    const fetchMixerChatHistory = async () => {
      await dispatch(getMixerChatHistory());
    };

    fetchMixerChatHistory();
  }, [dispatch]);

  useEffect(() => {
    const fetchMixerChat = async () => {
      await dispatch(getMixerChat());
    };

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
      fetchMixerChat();
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
