import React from 'react';

import { Grid, makeStyles, createStyles, Theme, Typography, ButtonBase, Button } from '@material-ui/core';
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
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
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

const ServiceNew: React.FC = () => {
  const classes = useStyles({});

  return (
    <div>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <ButtonBase disabled className={classes.serviceButtonBase}>
              <Grid className={classes.service} item>
                <img alt="twitch" className={classes.serviceImage} src="/assets/images/twitchLogo.png" />
                <Typography variant="h6">Connect Twitch</Typography>
              </Grid> 
            </ButtonBase>
            <ButtonBase href="/api/auth/mixer/login" className={classes.serviceButtonBase}>
              <Grid className={classes.service} item>
                <img alt="mixer" className={classes.serviceImage} src="/assets/images/mixerLogo.png" />
                <Typography variant="h6">Connect Mixer</Typography>
              </Grid>
            </ButtonBase>
            <ButtonBase disabled className={classes.serviceButtonBase}>
              <Grid className={classes.service} item>
                <img alt="instagram" className={classes.serviceImage} src="/assets/images/instagramLogo.png" />
                <Typography variant="h6">Connect Instagram</Typography>
              </Grid>
            </ButtonBase>
            <ButtonBase disabled className={classes.serviceButtonBase}>
              <Grid className={classes.service} item>
                <img alt="twitter" className={classes.serviceImage} src="/assets/images/twitterLogo.png" />
                <Typography variant="h6">Connect Twitter</Typography>
              </Grid>  
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ServiceNew;