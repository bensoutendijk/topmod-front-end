import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, createStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { selectMixerViewerAverage } from '../../selectors';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
  chatLog: {
    height: 'calc(100vh - 160px)',
    overflowY: 'auto',
  },
}));

function DashboardPage() {
  const classes = useStyles();

  const mixerChat = useSelector(state => state.mixer.chat.data);
  const modList = useSelector(state => state.mixer.modList.data);
  const mixerViewerAverage = useSelector(selectMixerViewerAverage);

  const { dateFrom } = useSelector(state => state.filters.dateRange);
  const { dateTo } = useSelector(state => state.filters.dateRange);

  const handleChooseDateTo = () => {
    const dateToCalendar = document.getElementById('dateToCalendar');
    if (dateToCalendar.style.display === 'none') {
      dateToCalendar.style.display = 'block';
    } else {
      dateToCalendar.style.display = 'none';
    }
  };

  const handleChooseDateFrom = () => {
    const dateFromCalendar = document.getElementById('dateFromCalendar');
    if (dateFromCalendar.style.display === 'none') {
      dateFromCalendar.style.display = 'block';
    } else {
      dateFromCalendar.style.display = 'none';
    }
  };

  const renderCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    let currentMonthDate = 1;
    let previousMonthDate = new Date(year, month, -firstDay + 1).getDate();
    let nextMonthDate = new Date(year, month + 1, 1).getDate();

    const calendarCells = [];
    for (let index = 0; index < 6; index += 1) {
      calendarCells.push([]);
      for (let innerIndex = 0; innerIndex < 7; innerIndex += 1) {
        const cellNumber = index * 7 + innerIndex;
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
                <div className={classes.calendarData}>
                  {currentMonthDate}
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

  const renderChatMessage = (chatEvent) => {
    let message = '';
    const messageArray = chatEvent.message.message;
    const username = chatEvent.user_name;
    messageArray.forEach((chatMessage) => {
      message += chatMessage.text;
    });
    return (
      <React.Fragment>
        <span>{`${username}: `}</span>
        <span>{message}</span>
      </React.Fragment>
    );
  };

  return (
    <Grid className={classes.root} container>
      <Grid item md={4}>
        <h4>Chat</h4>
        <Grid className={classes.chatLog}>
          {mixerChat ? (
            mixerChat.map(chatEvent => (
              <p>{renderChatMessage(chatEvent)}</p>
            ))
          ) : (
            null
          )}
        </Grid>
      </Grid>
      <Grid item md={4}>
        <h4>Mods</h4>
        {modList ? (
          modList.map(mod => (
            <p>{mod.username}</p>
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
            <button type="button" onClick={handleChooseDateFrom}>
              {dateFrom.toDateString()}
            </button>
            <div id="dateFromCalendar" style={{ position: 'absolute', display: 'none' }}>
              {renderCalendar(dateFrom.getFullYear(), dateFrom.getMonth())}
            </div>
          </div>
          <div>
            <button type="button" onClick={handleChooseDateTo}>
              {dateTo.toDateString()}
            </button>
            <div id="dateToCalendar" style={{ position: 'absolute', display: 'none' }}>
              {renderCalendar(dateTo.getFullYear(), dateTo.getMonth())}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
