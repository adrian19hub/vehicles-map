/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import React from 'react';

const ClusterMarker = ({ count, points, mapRef, supercluster, cluster, latitude, longitude }) => {
  const clusterMarkerStyle = {
    width: `${10 + (count / points.length) * 5000}px`,
    height: `${10 + (count / points.length) * 5000}px`,
  };
    return (
      <div
        className="cluster-marker"
        style={clusterMarkerStyle}
        onClick={() => {
          const expansionZoom = Math.min(
            supercluster.getClusterExpansionZoom(cluster.id), 
            20,
          );
          mapRef.current.setZoom(expansionZoom);
          mapRef.current.panTo({ lat: latitude, lng: longitude });
        }}
      >
        {count}
      </div>
    );
};

export default ClusterMarker;
