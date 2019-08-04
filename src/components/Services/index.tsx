import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';

import { Grid, makeStyles, createStyles, Theme, InputBase, Button, Typography, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined'

import ServiceListItem from './ServiceListItem';
import { fetchUsers } from '../../store/users/actions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  header: {
    padding: theme.spacing(4)
  },
  searchBar: {
    border: '2px solid #e2e2e2',
    borderRadius: theme.spacing(1),
  },
  service: {
    width: '100%',
    display: 'flex',
    padding: theme.spacing(2),
    
  },
  serviceButtonBase: {
    "&:hover": {
      backgroundColor: '#c2c2c2'
    },
    '&:nth-child(even)': {
      "&:hover": {
        backgroundColor: '#c2c2c2'
      },
      backgroundColor: '#f2f2f2',
    }
  },
  serviceImage: {
    maxHeight: '50px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  }
}));

const Services: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector((state: AppState) => state.users);

  useEffect(() => {
    const getUsers = async () => {
      await dispatch(fetchUsers());
    }
    getUsers();
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container direction="column">
          <Grid item>
            <Grid className={classes.header} container justify="space-between">
              <Grid item>
                <Grid className={classes.searchBar} container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <SearchIcon />
                  </Grid>
                  <Grid item>
                    <InputBase id="input-with-icon-grid" placeholder="Search" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  component={Link}
                  to="/services/new"
                >
                  Add New Service
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {users.allIds.length ? (
              <Grid container direction="column">
                {users.allIds.map(id => (
                  <ServiceListItem key={id} userId={id} />
                ))}
              </Grid>
            ) : (
              <Grid container direction="column">
                <Typography color="textSecondary" variant="h4">You haven't connected any services yet</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Services;