import React from 'react';
import { RouteComponentProps } from 'react-router';

const ServiceView: React.FC<RouteComponentProps<{userId: string}>> = (props) => {
  const { match } = props
  return (
    <div>
      {match.params.userId}
    </div>
  )
}

export default ServiceView;