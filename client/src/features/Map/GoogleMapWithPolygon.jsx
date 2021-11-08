/* eslint-disable no-plusplus */
import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationMarkers } from './mapUtils';
// import { defualtPolygonCoordinates } from './polygonAPI';
import { fetchVehicleIds } from '../../state/actions/mapActions';

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

const GoogleMapWithPolygon = ({ mapConfig, locationMarkers }) => {
    const dispatch = useDispatch();
    const selectingArea = useSelector((state) => state.map.selectingArea);
    console.log('RENDER - google map with polygons');
    const [coordinates] = useState(defualtPolygonCoordinates);

    useEffect(() => { dispatch(fetchVehicleIds(coordinates)); }, []);

    const handlePolygonMouseUp = (polygon) => {
        const vertices = polygon.getPath();
        const newCoordinates = [];
        for (let i = 0; i < vertices.getLength(); i++) {
          const xy = vertices.getAt(i);
          newCoordinates.push({ lat: xy.lat(), lng: xy.lng() });
        }
        dispatch(fetchVehicleIds(newCoordinates));
    };
      
    const handleApiLoaded = (map, maps) => {
      const polygon = new maps.Polygon({
        paths: coordinates,
        strokeColor: '#002e5b',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0082ff',
        fillOpacity: 0.35,
        editable: true,
        draggable: true,
        geodesic: true,
    });
      polygon.setMap(map);
      polygon.addListener('mouseup', () => handlePolygonMouseUp(polygon));
    };

    return (
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={mapConfig.center}
        defaultZoom={mapConfig.zoom}
        yesIWantToUseGoogleMapApiInternals 
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {locationMarkers}
      </GoogleMapReact>
    );
};

export default GoogleMapWithPolygon;
