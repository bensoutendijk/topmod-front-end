import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

import ButtonBase from '@material-ui/core/ButtonBase';

import { months } from '../../constants';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  calendarHeader: {
    flexGrow: 1,
    textAlign: 'center',
  },
  calendarRow: {
    display: 'flex',
  },
  calendarCell: {
    width: '24px',
  },
  calendarData: {
    
  },
  currentMonthDate: {

  },
  prevMonthDate: {
    backgroundColor: '#E2E2E2',
    color: '#A2A2A2',
  },
  nextMonthDate: {
    backgroundColor: '#E2E2E2',
    color: '#A2A2A2',
  },
}));

function Calendar(props) {
  const classes = useStyles();
  const { date, handleClick } = props;
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  let currentMonthDate = 1;
  let previousMonthDate = new Date(date.getFullYear(), date.getMonth(), 1 - firstDay).getDate();
  let nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDate();

  const calendarRows = [];

  for (let index = 0; index < 6; index += 1) {
    calendarRows.push([]);
    for (let innerIndex = 0; innerIndex < 7; innerIndex += 1) {
      const cellNumber = index * 7 + innerIndex;
      const cellYear = date.getFullYear();
      let cellMonth = date.getMonth();
      let cellDate = currentMonthDate;
      let cellDateClasses = classes.currentMonthDate;
      switch (true) {
        case cellNumber < firstDay:
          cellDateClasses = classes.prevMonthDate;
          cellDate = previousMonthDate;
          cellMonth = date.getMonth() - 1;
          previousMonthDate += 1;
          break;
        case cellNumber >= numDays + firstDay:
          cellDateClasses = classes.nextMonthDate;
          cellDate = nextMonthDate;
          cellMonth = date.getMonth() + 1;
          nextMonthDate += 1;
          break;
        default:
          currentMonthDate += 1;
          break;
      }

      calendarRows[index].push(
        <ButtonBase className={classes.calendarCell} onClick={handleClick(new Date(cellYear, cellMonth, cellDate))}>
          <div className={cellDateClasses}>
            <span className={classes.calendarData}>
              {cellDate}
            </span>
          </div>
        </ButtonBase>,
      );
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.calendarRow}>
        <div className={classes.calendarHeader}>
          <span className={classes.calendarHeaderText}>{months[date.getMonth()]}</span>
        </div>
      </div>
      {calendarRows.map(row => (
        <div className={classes.calendarRow}>
          {row}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
