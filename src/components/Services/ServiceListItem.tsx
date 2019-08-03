import React from 'react';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';

import { Grid, makeStyles, createStyles, Theme, Typography, ButtonBase } from '@material-ui/core';

import ServiceLogo from './ServiceLogo';

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
    padding: theme.spacing(2),
    
  },
  serviceButton: {
    width: '100%'
  },
  serviceLogo: {
    minHeight: '50px',
    minWidth: '50px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  }
}));

const ServiceListItem: React.FC<ServiceListItemProps> = (props) => {
  const { userId } = props;
  const classes = useStyles({});
  const service = useSelector((state: AppState) => state.users.byId[userId])

  return (
    <div className={classes.root}>
      <ButtonBase className={classes.serviceButton}>
        <Grid className={classes.service} item>
          <div className={classes.serviceLogo}>
            <ServiceLogo provider={service.provider} />
          </div>
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