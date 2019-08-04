import React from 'react';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';

import { Grid, makeStyles, createStyles, Theme, Typography, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
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
  service: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    padding: theme.spacing(2),
    
  },
  serviceButton: {
    width: '100%'
  },
  serviceLogo: {
    maxWidth: '50px',
    minWidth: '50px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  }
}));

const ServiceListItem: React.FC<ServiceListItemProps> = (props) => {
  const { userId } = props;
  const classes = useStyles({});
  const service = useSelector((state: AppState) => state.services.byId[userId])

  return (
    <div className={classes.root}>
      <ButtonBase className={classes.serviceButton} component={Link} to={`/services/${service.provider}/${service.data.username.toLowerCase()}`}>
        <Grid className={classes.service} item>
          <img alt={service.provider} className={classes.serviceLogo} src={`/assets/images/${service.provider}Logo.png`} />
          <Typography variant="h6">{service.data.username}</Typography>
        </Grid> 
      </ButtonBase>
    </div>
  )
}

interface ServiceListItemProps {
  userId: string;
}

export default ServiceListItem;