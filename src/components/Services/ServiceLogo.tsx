import React from 'react';
import { makeStyles, createStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  mixerLogo: {
    maxHeight: '50px',
  },
  twitchLogo: {
    maxHeight: '50px',
  },
  instagramLogo: {
    maxHeight: '50px',
  },
  twitterLogo: {
    maxHeight: '50px',
  },
}));

const ServiceLogo: React.FC<ServiceLogoProps> = (props) => {
  const { provider } = props;
  const classes = useStyles({});
  switch (provider) {
    case 'mixer':
      return (
        <img alt={provider} className={classes.mixerLogo} src="/assets/images/mixerMerge.svg" />
      )
    case 'twitch':
      return (
        <img alt={provider} className={classes.twitchLogo} src="/assets/images/twitchLogo.png" />
      )
    case 'instagram':
      return (
        <img alt={provider} className={classes.instagramLogo} src="/assets/images/instagramLogo.png" />
      )
    case 'twitter':
      return (
        <img alt={provider} className={classes.twitterLogo} src="/assets/images/twitterLogo.png" />
      )
    default:
      return (
        <div>
          Hello
        </div>
      )
  }
}

interface ServiceLogoProps {
  provider: string;
}

export default ServiceLogo;