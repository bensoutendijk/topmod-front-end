import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../store';

import MixerEmbed from '../Mixer/MixerEmbed';

const ServicePreview: React.FC<ServicePreviewProps> = (props) => {
  const { serviceId } = props;
  const service = useSelector((state: AppState) => state.users.byId[serviceId]);
  
  switch (service.provider) {
    case 'mixer':
      return (
        <MixerEmbed username={service.data.username} />
      )
    default:
      return (
        <div>
          No Preview Available
        </div>
      )
  }
}

interface ServicePreviewProps {
  serviceId: string
}

export default ServicePreview;