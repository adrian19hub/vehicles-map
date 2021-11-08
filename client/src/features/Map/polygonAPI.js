/* eslint-disable no-plusplus */
import React from 'react';
import { fetchVehicleIds } from '../../state/actions/mapActions';
import { store } from '../../state/store';

const defualtPolygonCoordinates = [
  {   
    lat: 51.522121898364986,
    lng: -0.1593582845911126,
  },
  {  
    lat: 51.489486554202024,
    lng: -0.16009828252122368,
  },
  { 
    lat: 51.48945352696307,
    lng: -0.09697481847935624,
  },
  {   
    lat: 51.52190825390342,
    lng: -0.09600745825457122,
  },
];

// eslint-disable-next-line import/prefer-default-export
export { defualtPolygonCoordinates };

// lat: 51.509865,
// lng: -0.118092,
