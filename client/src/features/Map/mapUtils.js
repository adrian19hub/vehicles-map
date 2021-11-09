/* eslint-disable import/no-cycle */
/* eslint-disable no-sparse-arrays */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mapActions } from '../../state/slices/mapSlice';
import LocationMarker from './Markers/Marker';

const generateLocationMarkers = (vehiclesLocations) => {
    return vehiclesLocations.map((vehicle, index) => {
        return <LocationMarker key={index} lat={vehicle.lat} lng={vehicle.lng} />;
    });
};

export { generateLocationMarkers };
