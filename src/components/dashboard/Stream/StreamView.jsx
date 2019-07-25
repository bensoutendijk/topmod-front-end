import React, { useState } from 'react';
import moment from 'moment';

import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import StreamViewershipChart from './StreamViewershipChart';

const useStyles = makeStyles(theme => createStyles({
  root: {
    color: theme.palette.primary.main,
  },
  gameCover: {
    maxHeight: '50px',
  },
  card: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function StreamView(props) {
  const classes = useStyles();
  const { stream } = props;
  const { time, duration } = stream;

  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  const minDuration = 30 * 60;
  if (stream.duration < minDuration) {
    return null;
  }

  const average = numbers => numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const getHours = seconds => Math.floor(seconds / (60 * 60));
  const getMinutes = seconds => Math.floor(seconds / 60);
  const convertTwoDigits = n => (n > 9 ? `${n}` : `0${n}`);

  const streamTitle = stream.game.name;
  const dateSubheader = `${moment(time).format('MM-DD-YYYY')} - ${getHours(duration)}hr ${convertTwoDigits(getMinutes(duration) - getHours(duration) * 60)} min`;
  const viewerAverage = average(stream.viewership.map(a => a.anon + a.authed));
  const followersGained = stream.followers.reduce((a, b) => a + b.delta, 0);

  return (
    <div className={classes.root} key={stream.id}>
      <Card className={classes.card}>
        <CardHeader
          avatar={(
            <img
              className={classes.gameCover}
              alt={stream.game.description}
              src={stream.game.coverUrl}
            />
          )}
          action={(
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          )}
          title={streamTitle}
          subheader={dateSubheader}
        />
        <Typography style={{ textAlign: 'center' }}>{`Viewer Average: ${viewerAverage.toFixed(2)}`}</Typography>
        <StreamViewershipChart
          uuid={stream.id}
          data={stream.viewership}
        />
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{`Followers Gained: ${followersGained}`}</Typography>
            <Typography paragraph>{`Start Time: ${moment(time).format('h:mm A')}`}</Typography>
            <Typography paragraph>{`End Time: ${moment(time).add(duration, 'second').format('h:mm A')}`}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default StreamView;
