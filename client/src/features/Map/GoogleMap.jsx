/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
import GoogleMapReact from 'google-map-react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicleIds } from '../../state/actions/mapActions';
import { useMarkers, useDefaultData } from './Hooks';
import { handleMapChange } from './utils';

const defualtPolygonCoordinates = [
  { lat: 51.522121898364986, lng: -0.1593582845911126 },
  { lat: 51.489486554202024, lng: -0.16009828252122368 },
  { lat: 51.48945352696307, lng: -0.09697481847935624 },
  { lat: 51.52190825390342, lng: -0.09600745825457122 },
];

const GoogleMap = ({ mapConfig, supercluster, mapRef, apiMapState }) => {
    const [apiMap, setApiMap] = apiMapState;

    // Redux hooks
    const { selectingArea } = useSelector((state) => state.map.ui);
    const dispatch = useDispatch();
    
    // General hooks
    const markers = useMarkers(mapConfig, supercluster);
    const [zoom, center] = useDefaultData(mapRef, mapConfig);
    
    // State hooks
    const [coordinates, setCoordinates] = useState(defualtPolygonCoordinates);
    const [apiLoaded, setApiLoaded] = useState(false);
    const [polygon, setPolygon] = useState(null);
    
    // Event handlers
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
      setApiLoaded(true);
      mapRef.current = map;
      setApiMap({ map, maps });
    };

    const handleSelectingAreaUpdate = () => {
      const [apiMap] = apiMapState;
      if (selectingArea) {
        const polygonObj = new apiMap.maps.Polygon({
          paths: coordinates,
          strokeColor: '#000000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#333333',
          fillOpacity: 0.35,
          editable: true,
          draggable: true,
          geodesic: true,
        });
        polygonObj.setMap(apiMap.map);
        polygonObj.addListener('mouseup', () => handlePolygonMouseUp(polygonObj));
        setPolygon(polygonObj);
      } else {
        polygon.setMap(null);
      }
    };

    // Effect hooks
    useEffect(() => {
      apiLoaded && handleSelectingAreaUpdate();
      selectingArea && dispatch(fetchVehicleIds(coordinates));
    }, [, selectingArea]);

    return (
      <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals 
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onChange={({ zoom: apiZoom, bounds }) => handleMapChange(apiZoom, bounds, apiMap, setCoordinates)}
      >
        {markers}
      </GoogleMapReact>
    );
};

export default GoogleMap;
