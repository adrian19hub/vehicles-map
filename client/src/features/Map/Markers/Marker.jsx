/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import ClusterMarker from './ClusterMarker';
import VehicleMarker from './VehicleMarker';

const Marker = ({ count, mapRef, cluster, latitude, longitude, supercluster }) => {
  return (
    <div className="location-marker">
      {!count // if its not a cluster
        ? <VehicleMarker />
        : (
          <ClusterMarker 
            count={count} 
            mapRef={mapRef}
            cluster={cluster}
            latitude={latitude}
            longitude={longitude}
            supercluster={supercluster}
          />
          ) // Cluster marker
        }
    </div>
    );
};

export default Marker;
