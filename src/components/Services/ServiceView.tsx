import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

import { Grid, makeStyles, createStyles, Theme, Typography, Button, Paper, Link as MuiLink } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../../store/users/actions';
import { selectUserByUsername } from '../../selectors';
import { IUser } from '../../store/users/types';

import ServicePreview from './ServicePreview';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  streamHero: {
    display: 'flex',
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
  }, [dispatch, provider, username]);

  if (!service) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={8}>
              <Paper className={classes.streamHero}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container>
                      <Grid item md={8}>
                        <Grid container direction="column" spacing={2}>
                          <Grid item>
                            <Typography variant="h6">{service.data.username}</Typography>
                          </Grid>
                          <Grid item>
                            <Typography>
                              <MuiLink target="_blank" href={`https://mixer.com/${service.data.username}`} >
                                {`https://mixer.com/${service.data.username}`}
                              </MuiLink>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography color="textSecondary">{'Last streamed on {{streams[0].date}}'}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={4}>
                        <ServicePreview serviceId={service._id} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button variant="contained">Stream Settings</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained">Mod Settings</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Paper>

              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper>

              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

interface ServiceViewProps extends RouteComponentProps<{provider: string; username: string}> {
  
}

export default ServiceView;