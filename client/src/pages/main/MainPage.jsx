/* eslint-disable padded-blocks */
import React from 'react';
import Dashboard from '../../features/Dashboard/Dashboard';
import MapContainer from '../../features/Map/MapContainer';

/**
 * DESC: Component handling the main page of the application
 * PROPS: none
 */
const MainPage = () => {
    return (
        <div className="main-page">
            <Dashboard />
            <MapContainer />
        </div>
    );
};

export default MainPage;
