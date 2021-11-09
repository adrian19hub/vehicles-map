/* eslint-disable no-unused-expressions */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable no-sparse-arrays */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mapActions } from '../../state/slices/mapSlice';
import Marker from './Markers/Marker';

const useVehiclePoints = () => {
    const dispatch = useDispatch();
    const vehiclesLocations = useSelector((state) => state.map.data.vehiclesLocations);

    useEffect(() => {
        const vehiclePoints = vehiclesLocations.map((vehicle, index) => ({
            type: 'Feature',
            properties: {
                cluster: false,
                vehicleId: index,
            },
            geometry: { type: 'Point', coordinates: [vehicle.lng, vehicle.lat] },
        }));
        dispatch(mapActions.setVehiclePoints(vehiclePoints));
    }, [vehiclesLocations]);
};

const useMarkers = (mapRef, supercluster) => {
    const clusters = useSelector((state) => state.map.ui.clusters);

    const getMarkers = useCallback(() => {
      return clusters.map((cluster, index) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } = cluster.properties;
            return (
              <Marker 
                key={index}
                lat={latitude}
                lng={longitude}
                count={isCluster ? pointCount : 0}
                longitude={longitude}
                latitude={latitude}
                mapRef={mapRef}
                cluster={cluster}
                supercluster={supercluster}
              />
            );
        });
        }, [, clusters]);
    
    return getMarkers();
};

const useDefaultData = (mapRef, mapConfig) => {
    const [zoom, setZoom] = useState(null);
    const [center, setCenter] = useState(null);
    useEffect(() => {
        if (mapRef.current) {
            setZoom(mapRef.current.zoom);
            setCenter({
                lat: mapRef.current.center.lat(),
                lng: mapRef.current.center.lng(),
            });
        } else {
            setZoom(mapConfig.zoom); setCenter(mapConfig.center);
        }
    }, [, mapRef]);
    return [zoom, center];
};

// const useMapRef = () => {
//     const mapRef = useRef();

// };

export { useMarkers, useDefaultData };
export default useVehiclePoints;
