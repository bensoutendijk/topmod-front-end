import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';

import Calendar from './Calendar';

import { updateDateFrom, updateDateTo } from '../../store/filters/actions';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
  },
}));

function DateSelector() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { dateFrom } = useSelector(state => state.filters.dateRange);
  const { dateTo } = useSelector(state => state.filters.dateRange);

  const handleCalendarFromClick = date => async () => {
    await dispatch(updateDateFrom(date));
  };

  const handleCalendarToClick = date => async () => {
    await dispatch(updateDateTo(date));
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
    <div className={classes.root}>
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
  );
}

export default DateSelector;
