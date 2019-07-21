import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/styles';

import {
  getMixerChatHistory,
  getMixerChat,
  updateMixerChat,
  getMixerStreams,
  getMixerUser,
  getMixerModList,
  getMixerViewers,
} from '../../actions';

import DashboardPage from './DashboardPage';
import ServicesPage from './ServicesPage';
import CalendarPage from './CalendarPage';


const useStyles = makeStyles(theme => createStyles({
  root: {
    marginLeft: '210px',
    width: 'calc(100% - 210px)',
    height: '100%',
    padding: theme.spacing(4),
  },
}));

function Content() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const mixerUser = useSelector(state => state.mixer.user);
  const chatClient = useSelector(state => state.mixer.chatClient);

  const dateFrom = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
  const dateTo = new Date();

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
      const data = JSON.parse(json);
      if (data.event === 'ChatMessage') {
        dispatch(updateMixerChat(data));
      }
    });

    return socket;
  };

  useEffect(() => {
    const fetchMixer = async () => {
      await dispatch(getMixerUser());
    };
    const fetchMixerChatHistory = async () => {
      await dispatch(getMixerChatHistory());
    };
    const fetchMixerChat = async () => {
      await dispatch(getMixerChat());
    };
    const fetchMixerStreams = async () => {
      await dispatch(getMixerStreams());
    };
    const fetchMixerModList = async () => {
      await dispatch(getMixerModList());
    };
    const fetchMixerViewers = async () => {
      await dispatch(getMixerViewers(dateFrom.toISOString(), dateTo.toISOString()));
    };

    fetchMixer();
    fetchMixerChatHistory();
    fetchMixerChat();
    fetchMixerStreams();
    fetchMixerModList();
    fetchMixerViewers();

    if (chatClient.fetched) {
      const socket = connectMixerChat();
      return () => {
        socket.close();
      };
    }

    return () => {};
  }, []);

  return (
    <div className={classes.root}>
      <Route
        exact
        path="/dashboard"
        render={
          props => (
            <DashboardPage {...props} />
          )
        }
      />
      <Route
        path="/dashboard/services"
        render={
          props => (
            <ServicesPage {...props} />
          )
        }
      />
      <Route
        path="/dashboard/calendar"
        render={
          props => (
            <CalendarPage {...props} />
          )
        }
      />
    </div>
  );
}

export default Content;
