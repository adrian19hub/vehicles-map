/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { Icon } from '@iconify/react';
import ClusterMarker from './ClusterMarker';

const LocationMarker = ({ count, points, mapRef, supercluster, cluster, latitude, longitude }) => {
    return (
      <div className="location-marker">
        {!count // if its not a cluster
        ? <Icon icon="ant-design:car-filled" className="location-icon" /> // Signle car marker
        : (
          <ClusterMarker 
            count={count} 
            points={points}
            mapRef={mapRef}
            supercluster={supercluster}
            cluster={cluster}
            latitude={latitude}
            longitude={longitude}
          />
          ) // Cluster marker
        }
      </div>
    );
};

export default LocationMarker;
