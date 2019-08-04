import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { Grid, makeStyles, createStyles, Theme, Typography, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { fetchUser } from '../../store/users/actions';
import { selectUserByUsername } from '../../selectors';
import { IUser } from '../../store/users/types';

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

const ServiceView: React.FC<ServiceViewProps> = (props) => {
  const { match: { params: { provider, username } } } = props
  const service: IUser = useSelector(selectUserByUsername(provider, username))[0];
  const classes = useStyles({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async (provider: string, username: string) => {
      await dispatch(fetchUser(provider, username));
    }

    getUser(provider, username);
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
              <Typography>{service.data.username} - {service.provider}</Typography>
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

interface ServiceViewProps extends RouteComponentProps<{provider: string; username: string}> {
  
}

export default ServiceView;