import React, { useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  calendarTable: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  prevMonthDate: {
    color: '#828282',
  },
  nextMonthDate: {
    color: '#828282',
  }
}));

function CalendarPage() {
  const classes = useStyles();

  const renderCalendar = (day, month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = new Date(year, month + 1, 0).getDate();
    let currentMonthDate = 1;
    let previousMonthDate = new Date(year, month, -firstDay + 1).getDate();
    let nextMonthDate = new Date(year, month + 1, 1).getDate();

    const calendarCells = [];
    for (let index = 0; index < 6; index++) {
      calendarCells.push([]);
      for (let innerIndex = 0; innerIndex < 7; innerIndex++) {
        const cellNumber = index * 7 + innerIndex;
        if (cellNumber < firstDay) {
          calendarCells[index].push(
            <td>
              <Paper className={classes.prevMonthDate}>
                {previousMonthDate}
              </Paper>
            </td>
          );
          previousMonthDate++;
        } 
        if (cellNumber >= firstDay && cellNumber < numDays + firstDay) {
          calendarCells[index].push(
            <td>
              <Paper>
                {currentMonthDate}
              </Paper>
            </td>
          );
          currentMonthDate++;
        }
        if (cellNumber >= numDays + firstDay) {
          calendarCells[index].push(
            <td>
              <Paper className={classes.nextMonthDate}>
                {nextMonthDate}
              </Paper>
            </td>
          );
          nextMonthDate++;
        }
      }
    }

    return (
      calendarCells.map((row) => (
        <tr>{row.map((cell) => (cell))}</tr>
      ))
    )
  }

  const previousMonth = () => {
    setDay(1);
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  const nextMonth = () => {
    setDay(1);
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  

  return (
    <div className={classes.root}>
      <h1>Calendar</h1>
      <h4>{`${months[month]} ${year}`}</h4>
      <div>
        <button onClick={previousMonth}>Prev</button>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className={classes.calendarTable}>
        <table>
          <tbody>
            <tr>
              {daysOfWeek.map((dayOfWeek) => (
                <th>{dayOfWeek}</th>
              ))}
            </tr>
            {renderCalendar(day, month, year)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CalendarPage;