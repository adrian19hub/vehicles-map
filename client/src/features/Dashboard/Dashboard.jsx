/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap';
import { mapActions } from '../../state/slices/mapSlice';
import IdList from './IdList';

const defaultBtnMessage = 'Select Area';

const Dashboard = () => {
    const { selectingArea } = useSelector((state) => state.map);
    const [btnText, setbtnText] = useState(defaultBtnMessage);
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(selectingArea ? mapActions.disableSelectingArea() : mapActions.initSelectingArea());
    };

    useEffect(() => {
      setbtnText(selectingArea ? 'Clear Selection Area' : defaultBtnMessage);
    }, [selectingArea]);

    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h4>Vehicles In Selected Area:</h4>
          <Button onClick={handleClick}>{btnText}</Button>
        </div>
        <IdList />
      </div>
    );
};

export default Dashboard;
