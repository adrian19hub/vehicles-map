/* eslint-disable padded-blocks */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../../features/Dashboard/Dashboard';
import MapContainer from '../../features/Map/MapContainer';

const MainPage = () => {
  console.log('RENDER - main page');
    return (
      <div className="main-page">
        <Dashboard />
        <MapContainer />
      </div>
    );
};

export default MainPage;
