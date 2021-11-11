import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSupercluster from 'use-supercluster';
import { fetchVehiclesLocations } from '../../state/actions/mapActions';
import Loader from './Loader';
import useVehiclePoints from './Hooks';
import GoogleMap from './GoogleMap';
import { mapActions } from '../../state/slices/mapSlice';

const mapConfig = {
    center: {
        lat: 51.509865,
        lng: -0.118092,
    },
    zoom: 11,
};

const MapContainer = () => {
    // Redux hooks
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.map.data.loading);
    const { zoom, bounds, vehiclePoints } = useSelector((state) => state.map.ui);
  
    // State hooks
    const [apiMap, setApiMap] = useState(null);
  
    // General hooks
    useVehiclePoints();
    const mapRef = useRef();
    const { clusters } = useSupercluster({
        points: vehiclePoints,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 20 },
    });
  
    // Effect hooks
    useEffect(() => {
        dispatch(fetchVehiclesLocations());
        dispatch(mapActions.setZoom(10));
    }, []);
    useEffect(() => { dispatch(mapActions.setClusters(clusters)); }, [clusters]);

    return (
        <div className="map">
            {loading 
                ? <Loader /> 
                : <GoogleMap
                    mapConfig={mapConfig}
                    mapRef={mapRef}
                    apiMapState={[apiMap, setApiMap]}
                />}
        </div>
    );
};
  
export default MapContainer;
