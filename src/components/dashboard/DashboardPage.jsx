import uuid from 'uuid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';

import { updateDateFrom, updateDateTo, getMixerViewers } from '../../actions';
import { selectMixerViewerAverage, selectMixerViewersOverTime } from '../../selectors';
import Calendar from './Calendar';
import MixerChat from './Mixer/MixerChat';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
}));

function DashboardPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const modList = useSelector(state => state.mixer.modList.data);
  const mixerViewerAverage = useSelector(selectMixerViewerAverage);
  const mixerViewersByDay = useSelector(selectMixerViewersOverTime);

  const { dateFrom } = useSelector(state => state.filters.dateRange);
  const { dateTo } = useSelector(state => state.filters.dateRange);

  const handleCalendarFromClick = date => async (event) => {
    await dispatch(updateDateFrom(date));
    dispatch(getMixerViewers());
  };

  const handleCalendarToClick = date => async (event) => {
    await dispatch(updateDateTo(date));
    dispatch(getMixerViewers());
  };

  const handleOpenDateTo = () => {
    const dateToCalendar = document.getElementById('dateToCalendar');
    if (dateToCalendar.style.display === 'none') {
      dateToCalendar.style.display = 'block';
    } else {
      dateToCalendar.style.display = 'none';
    }
  };

  const handleOpenDateFrom = () => {
    const dateFromCalendar = document.getElementById('dateFromCalendar');
    if (dateFromCalendar.style.display === 'none') {
      dateFromCalendar.style.display = 'block';
    } else {
      dateFromCalendar.style.display = 'none';
    }
  };

  return (
    <Grid className={classes.root} container>
      <Grid item md={4}>
        <h4>Chat</h4>
        <MixerChat />
      </Grid>
      <Grid item md={4}>
        <h4>Mods</h4>
        {modList ? (
          modList.map(mod => (
            <p key={uuid.v4()}>{mod.username}</p>
          ))
        ) : (
          null
        )}
      </Grid>
      <Grid item md={4}>
        <h4>
          {'Average Viewers'}
        </h4>
        <span>{mixerViewerAverage.toFixed(2)}</span>
        <div style={{ display: 'flex' }}>
          <div>
            <button type="button" onClick={handleOpenDateFrom}>
              {dateFrom.toDateString()}
            </button>
            <div id="dateFromCalendar" style={{ position: 'absolute', display: 'none' }}>
              <Calendar date={dateFrom} handleClick={handleCalendarFromClick} />
            </div>
          </div>
          <div>
            <button type="button" onClick={handleOpenDateTo}>
              {dateTo.toDateString()}
            </button>
            <div id="dateToCalendar" style={{ position: 'absolute', display: 'none' }}>
              <Calendar date={dateTo} handleClick={handleCalendarToClick} />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;