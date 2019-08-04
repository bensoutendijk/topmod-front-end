import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { Grid, makeStyles, createStyles, Theme, Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { fetchUser } from '../../store/users/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  header: {
    padding: theme.spacing(4)
  },
  serviceImage: {
    maxHeight: '50px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  }
}));

const ServiceView: React.FC<RouteComponentProps<{userId: string}>> = (props) => {
  const { match: { params: { userId } } } = props
  const service = useSelector((state: AppState) => state.users.byId[userId]);
  const classes = useStyles({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async (userId: string) => {
      await dispatch(fetchUser(userId));
    }

    getUser(userId);
  }, [dispatch])

  if (!service) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item>
          <Grid className={classes.header} container justify="space-between">
            <Grid item>
              <Button
                color="secondary"
                variant="contained"
                component={Link}
                to="/services"
              >
                Back
              </Button>
            </Grid>
            <Grid item>
              <Typography>{service.data.userid}</Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ServiceView;