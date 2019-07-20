import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom';

import { getMixerChatHistory, getMixerStreams, getMixerChat, getMixerUser } from '../../actions';

import { makeStyles, createStyles } from '@material-ui/styles';
import DashboardPage from './DashboardPage'
import ServicesPage from './ServicesPage';
import CalendarPage from './CalendarPage';


const useStyles = makeStyles((theme) => createStyles({
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

  useEffect(() => {
    const fetchMixer = async () => {
      await dispatch(getMixerUser());
    }
    const fetchMixerChatHistory = async () => {
      await dispatch(getMixerChatHistory());
    }
    const fetchMixerChat = async () => {
      await dispatch(getMixerChat());
    }
    const fetchStreams = async () => {
      await dispatch(getMixerStreams());
    }

    fetchMixer();
    fetchMixerChatHistory();
    fetchMixerChat();
    fetchStreams();
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Route exact path="/dashboard" render={props => (
        <DashboardPage {...props} />
      )} />
      <Route path="/dashboard/services" render={props => (
        <ServicesPage {...props} />
      )} />
      <Route path="/dashboard/calendar" render={props => (
        <CalendarPage {...props} />
      )} />
    </div>
  )
}

export default Content;