/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useSelector } from 'react-redux';

const ClusterMarker = ({ count, mapRef, cluster, latitude, longitude, supercluster }) => {
  const vehiclesPoints = useSelector((state) => state.map.ui.vehiclePoints);

  const clusterMarkerStyle = {
    width: `${10 + (count / vehiclesPoints.length) * 5000}px`,
    height: `${10 + (count / vehiclesPoints.length) * 5000}px`,
  };

  const handleClick = () => {
    // const expansionZoom = Math.min(
    //   supercluster.getClusterExpansionZoom(cluster.id), 
    //   20,
    // );
    //   mapRef.current.setZoom(expansionZoom);
    //   mapRef.current.panTo({ lat: latitude, lng: longitude });
  };

    return (
      <div
        className="cluster-marker"
        style={clusterMarkerStyle}
        onClick={handleClick}
      >
        {count}
      </div>
    );
};

export default ClusterMarker;
