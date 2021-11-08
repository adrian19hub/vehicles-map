/* eslint-disable react/no-array-index-key */
/* eslint-disable no-empty */
/* eslint-disable max-len */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const GoogleMapWithoutPolygon = ({ mapConfig, setZoom, setBounds, mapRef, clusters, points, supercluster }) => {
    console.log('RENDER - google map WITHOUT polygons');

    return (
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => { mapRef.current = map; }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {clusters.map((cluster, index) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } = cluster.properties;

          return (
            <LocationMarker 
              key={index}
              lat={latitude}
              lng={longitude}
              count={isCluster ? pointCount : 0}
              points={points}
              longitude={longitude}
              latitude={latitude}
              supercluster={supercluster}
              mapRef={mapRef}
              cluster={cluster}
            />
);
        })}
        {/* {locationMarkers} */}

      </GoogleMapReact>
      );
};

export default GoogleMapWithoutPolygon;
