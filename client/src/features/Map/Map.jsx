/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
/* eslint-disable react/no-array-index-key */
/* eslint-disable padded-blocks */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSupercluster from 'use-supercluster';
import { fetchVehiclesLocations } from '../../state/actions/mapActions';
import Loader from './Loader';
import { generateLocationMarkers, generateVehiclePoints } from './mapUtils';
import GoogleMapWithPolygon from './GoogleMapWithPolygon';
import GoogleMapWithoutPolygon from './GoogleMapWithoutPolygon';

const mapConfig = {
  center: {
      lat: 51.509865,
      lng: -0.118092,
  },
  zoom: 11,
};

const Map = () => {
  const dispatch = useDispatch();
    console.log('RENDER - map');

    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);
    const { loading, vehiclesLocations, selectingArea } = useSelector((state) => state.map);

    const points = generateVehiclePoints(vehiclesLocations);

    useEffect(() => dispatch(fetchVehiclesLocations()), []);

    const { clusters, supercluster } = useSupercluster({
      points,
      bounds,
      zoom,
      options: { radius: 75, maxZoom: 20 },
    });

    // console.log(clusters);
    const renderProperMap = () => {
      return selectingArea 
            ? (
              <GoogleMapWithPolygon 
                mapConfig={mapConfig}
              />
              )
            : (
              <GoogleMapWithoutPolygon
                mapConfig={mapConfig}
                zoom={zoom}
                bounds={bounds}
                mapRef={mapRef}
                setZoom={setZoom}
                setBounds={setBounds}
                clusters={clusters}
                points={points}
                supercluster={supercluster}
              />
              ); 
    };
   
    return (
      <div className="map">
        {loading ? <Loader /> : renderProperMap()}
      </div>
    );
};

export default Map;
