/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import LocationMarker from './LocationMarker';

const generateLocationMarkers = (vehiclesLocations) => {
    return vehiclesLocations.map((vehicle, index) => {
        return <LocationMarker key={index} lat={vehicle.lat} lng={vehicle.lng} />;
    });
};

const generateVehiclePoints = (vehiclesLocations) => {
    return vehiclesLocations.map((vehicle, index) => ({
        type: 'Feature',
        properties: {
            cluster: false,
            vehicleId: index,
        },
        geometry: { type: 'Point', coordinates: [vehicle.lng, vehicle.lat] },
    }));
};

export { generateLocationMarkers, generateVehiclePoints };
