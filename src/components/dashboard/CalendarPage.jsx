import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => createStyles({
  root: {
    height: '100%',
    flexGrow: 1,
  },
  calendarTable: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  calendarRow: {
    width: '100%',
  },
  calendarCell: {
    flexGrow: 1,
  },
  cellPaper: {

  },
  calendarData: {
    margin: 'auto',
    width: '10vh',
    height: '100%',
  },
  calendarHeader: {
    margin: 'auto',
    width: '10vh',
    height: '24px',
  },
  prevMonthDate: {
    backgroundColor: '#E2E2E2',
    color: '#A2A2A2',
  },
  nextMonthDate: {
    backgroundColor: '#E2E2E2',
    color: '#A2A2A2',
  },
  streamCell: {
    backgroundColor: theme.palette.secondary.light,
  },
}));

function CalendarPage() {
  const classes = useStyles();

  const [date, setDate] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const mixerStreams = useSelector(state => state.mixer.streams);

  const renderCalendar = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    let currentMonthDate = 1;
    let previousMonthDate = new Date(year, month, -firstDay + 1).getDate();
    let nextMonthDate = new Date(year, month + 1, 1).getDate();

    const getStreamsByDate = (stream) => {
      const streamDate = new Date(stream.time);
      return (
        streamDate.getDate() === currentMonthDate
        && streamDate.getMonth() === month
        && streamDate.getFullYear() === year
      );
    };

    const calendarCells = [];
    for (let index = 0; index < 6; index += 1) {
      calendarCells.push([]);
      for (let innerIndex = 0; innerIndex < 7; innerIndex += 1) {
        const cellNumber = index * 7 + innerIndex;
        const mixerStream = mixerStreams.data.filter(getStreamsByDate);
        if (cellNumber < firstDay) {
          calendarCells[index].push(
            <Grid key={cellNumber} item className={classes.calendarCell}>
              <Paper square className={classes.prevMonthDate}>
                <div className={classes.calendarData}>
                  {previousMonthDate}
                </div>
              </Paper>
            </Grid>,
          );
          previousMonthDate += 1;
        }
        if (cellNumber >= firstDay && cellNumber < numDays + firstDay) {
          calendarCells[index].push(
            <Grid key={cellNumber} item className={classes.calendarCell}>
              <Paper square className={classes.cellPaper}>
                <div className={mixerStream.length ? classes.streamCell : null}>
                  <div className={classes.calendarData}>
                    {currentMonthDate}
                  </div>
                </div>
              </Paper>
            </Grid>,
          );
          currentMonthDate += 1;
        }
        if (cellNumber >= numDays + firstDay) {
          calendarCells[index].push(
            <Grid key={cellNumber} item className={classes.calendarCell}>
              <Paper square className={classes.nextMonthDate}>
                <div className={classes.calendarData}>
                  {nextMonthDate}
                </div>
              </Paper>
            </Grid>,
          );
          nextMonthDate += 1;
        }
      }
    }

    return (
      calendarCells.map(row => (
        <Grid item className={classes.calendarRow}>
          <Grid container justify="space-evenly">
            {row}
          </Grid>
        </Grid>
      ))
    );
  };

  const previousMonth = () => {
    setDate(1);
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    setDate(1);
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className={classes.root}>
      <h4>{`${months[month]} ${year}`}</h4>
      <div>
        <button type="button" onClick={previousMonth}>Prev</button>
        <button type="button" onClick={nextMonth}>Next</button>
      </div>
      <Grid container className={classes.calendarTable} direction="column">
        <Grid item className={classes.calendarRow}>
          <Grid container justify="space-evenly">
            {daysOfWeek.map(dayOfWeek => (
              <Grid item key={dayOfWeek} className={classes.calendarCell}>
                <Paper square>
                  <div className={classes.calendarHeader}>
                    {dayOfWeek}
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {renderCalendar(date, month, year)}
      </Grid>
    </div>
  );
}

export default CalendarPage;
