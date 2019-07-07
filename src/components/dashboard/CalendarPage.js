import React, { useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/styles'; 
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  calendarRow: {
    display: 'flex',
  }
}));

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function CalendarPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Calendar</h1>
      <div className={classes.calendarRow}>
        <table>
          <tr>
            {daysOfWeek.map((day) => (
              <th>{day}</th>
            ))}
          </tr>
        </table>
      </div>
      <Fab color="secondary" aria-label="Add" size="small"><AddIcon /></Fab>
    </div>
  )
}

export default CalendarPage;