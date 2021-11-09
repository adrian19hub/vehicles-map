/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useSelector } from 'react-redux';
import IdList from './IdList';
import EmptyListMessage from './EmptyListMessage';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
    const selectingArea = useSelector((state) => state.map.ui.selectingArea);

      return (
        <div className="dashboard">
          <DashboardHeader />
          {selectingArea ? <IdList /> : <EmptyListMessage />}
        </div>
    );
};

export default Dashboard;
