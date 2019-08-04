import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    border: 'none',
    borderRadius: '5px',
    height: '140px',
    width: '250px',
  },
}));

const MixerEmbed: React.FC<MixerEmbedProps> = (props) => {
  const { username } = props;
  const classes = useStyles({});
  return (
    <iframe 
      className={classes.root}
      title={`${username}'s stream`} 
      src={`https://mixer.com/embed/player/${username}`}
    />
  )
}

interface MixerEmbedProps {
  username: string;
}

export default MixerEmbed;