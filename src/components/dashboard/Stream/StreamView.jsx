import React from 'react';
import moment from 'moment';

import { makeStyles, createStyles } from '@material-ui/styles';

import StreamViewershipChart from './StreamViewershipChart';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
  stream: {
    display: 'flex',
    alignItems: 'center',
    height: '300px',
    paddingBottom: '24px',
  },
  gameCover: {
    height: '150px',
  },
}));

function StreamView(props) {
  const classes = useStyles();
  const { stream } = props;

  const minDuration = 30 * 60;
  if (stream.duration < minDuration) {
    return null;
  }

  const { time, duration } = stream;

  const getHours = seconds => Math.floor(seconds / (60 * 60));
  const getMinutes = seconds => Math.floor(seconds / 60);
  const convertTwoDigits = n => (n > 9 ? `${n}` : `0${n}`);

  return (
    <div className={classes.stream} key={stream.id}>
      <div>
        <p>{`Date: ${moment(time).format('MM-DD-YYYY')}`}</p>
        <p>{`Start Time: ${moment(time).format('h:mm A')}`}</p>
        <p>{`Duration: ${getHours(duration)}:${convertTwoDigits(getMinutes(duration) - getHours(duration) * 60)}`}</p>
        <p>{`End Time: ${moment(time).add(duration, 'second').format('h:mm A')}`}</p>
      </div>
      <div>
        <StreamViewershipChart uuid={stream.id} data={stream.viewership} />
      </div>
      <div>
        <img
          className={classes.gameCover}
          alt={stream.game.description}
          src={stream.game.coverUrl}
        />
      </div>
    </div>
  );
}

export default StreamView;
