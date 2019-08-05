import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import moment from 'moment';

import { Grid, makeStyles, createStyles, Theme, Typography, Button, Paper, Link as MuiLink, ListItem, List } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchService } from '../../store/services/actions';
import { selectUserByUsername, selectRecentStreams } from '../../selectors';
import { IService } from '../../store/services/types';

import ServicePreview from './ServicePreview';
import { fetchStreams } from '../../store/streams/actions';
import { IStream } from '../../store/streams/types';

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
  },
  recentStreamsCard: {
    display: 'flex',
    padding: theme.spacing(4)
  }
}));

const ServiceView: React.FC<ServiceViewProps> = (props) => {
  const { match: { params: { provider, username } } } = props
  const service: IService = useSelector(selectUserByUsername(provider, username))[0];
  const streams: IStream[] = useSelector(selectRecentStreams());
  const classes = useStyles({});
  const dispatch = useDispatch();

  // const average = (numbers: number[]) => numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const getHours = (seconds: number) => Math.floor(seconds / (60 * 60));
  const getMinutes = (seconds: number) => Math.floor(seconds / 60);
  const convertTwoDigits = (n: number) => (n > 9 ? `${n}` : `0${n}`);

  useEffect(() => {
    const getUser = async (provider: string, username: string) => {
      await dispatch(fetchService(provider, username));
    }

    const getStreams = async (provider: string, username: string) => {
      await dispatch(fetchStreams(provider, username));
    }

    getUser(provider, username)
    .then(() => getStreams(provider, username));
  }, [dispatch, provider, username]);

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
                            {service ? (
                              <Typography variant="h6">{service.data.username}</Typography>
                            ) : (
                              <Typography variant="h6">...</Typography>
                            )}
                          </Grid>
                          <Grid item>
                              {service ? (
                                <Typography>
                                    <MuiLink target="_blank" href={`https://mixer.com/${service.data.username}`} >
                                      {`https://mixer.com/${service.data.username}`}
                                    </MuiLink>
                                </Typography>
                              ): (
                                <Typography>...</Typography>
                              )}
                          </Grid>
                          <Grid item>
                            {streams.length ? (
                              <Typography color="textSecondary">{`Last streamed on ${moment(streams[streams.length - 1].time).format('MMM Do @ hh:mmA')}`}</Typography>
                            ) : (
                              <Typography color="textSecondary">...</Typography>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={4}>
                        {service ? (
                          <ServicePreview serviceId={service._id} />
                        ): (
                          null
                        )}
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
              <Paper className={classes.recentStreamsCard}>
                <Grid container direction="column">
                  <Typography variant="h6">Recent Streams</Typography>
                  <List>
                  {streams.length ? (
                    streams.map((stream: IStream) => (
                      <ListItem>{`${moment(stream.time).format('MM-DD-YYYY')} - ${getHours(stream.duration)}hr ${convertTwoDigits(getMinutes(stream.duration) - getHours(stream.duration) * 60)} min`}</ListItem>
                    ))
                  ) : (
                    null
                  )}
                  </List>
                </Grid>
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