import React from 'react';
import { useSelector } from 'react-redux';
import IdList from './IdList';
import EmptyListMessage from './EmptyListMessage';
import DashboardHeader from './DashboardHeader';

/**
 * DESC: A side component that displays the header and the list of ids (or a message if there are none)
 * PROPS: none
 */
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
