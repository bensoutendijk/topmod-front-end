import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ModList from './ModList';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const { chatters, moderators, chat } = props;
  console.log(chat);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mod List</TableCell>
                <TableCell>Sent Messages</TableCell>
                <TableCell>Deleted Messages</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ModList chatters={chatters} moderators={moderators} chat={chat} />
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard;