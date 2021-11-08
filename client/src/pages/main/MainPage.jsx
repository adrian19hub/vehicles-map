/* eslint-disable padded-blocks */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../../features/Dashboard/Dashboard';
import Map from '../../features/Map/Map';

const MainPage = () => {
  console.log('RENDER - main page');
    return (
      <div className="main-page">
        <Dashboard />
        <Map />
      </div>
    );
};

export default MainPage;
