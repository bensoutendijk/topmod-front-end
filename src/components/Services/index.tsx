import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, TextField, InputAdornment, makeStyles, createStyles, Theme, InputBase, Button, Typography, ButtonBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined'

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
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {

  },[dispatch])

  return (
    <div className={classes.root}>
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
              >
                Add New Service
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <ButtonBase className={classes.serviceButtonBase}>
              <Grid className={classes.service} item alignItems="center">
                <img className={classes.serviceImage} src="/assets/images/twitchLogo.png" />
                <Typography variant="h6">Connect Twitch</Typography>
              </Grid> 
            </ButtonBase>
            <ButtonBase className={classes.serviceButtonBase}>
              <Grid className={classes.service} item alignItems="center">
                <img className={classes.serviceImage} src="/assets/images/mixerMerge.svg" />
                <Typography variant="h6">Connect Mixer</Typography>
              </Grid>
            </ButtonBase>
            <ButtonBase className={classes.serviceButtonBase}>
              <Grid className={classes.service} item alignItems="center">
                <img className={classes.serviceImage} src="/assets/images/instagramLogo.png" />
                <Typography variant="h6">Connect Instagram</Typography>
              </Grid>
            </ButtonBase>
            <ButtonBase className={classes.serviceButtonBase}>
              <Grid className={classes.service} item alignItems="center">
                <img className={classes.serviceImage} src="/assets/images/twitterLogo.png" />
                <Typography variant="h6">Connect Twitter</Typography>
              </Grid>  
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Services;