import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { mapActions } from '../../state/slices/mapSlice';

/**
 * DESC: Dashboard header, includes the polygon feature btn and a title for the id's list
 * PROPS: none
 */
const DashboardHeader = () => {
    // Redux hooks
    const selectingArea = useSelector((state) => state.map.ui.selectingArea);
    const dispatch = useDispatch();
    
    // State hooks
    const [btnText, setbtnText] = useState('Select Area');

    // Event handlers
    const handleClick = () => {
        dispatch(selectingArea 
            ? mapActions.disableSelectingArea() 
            : mapActions.initSelectingArea());
    };
    
    // Effect hooks
    useEffect(() => setbtnText(selectingArea ? 'Clear Area' : 'Select Area'), [selectingArea]);

    return (
        <div className="dashboard-header">
            <Button variant="secondary" onClick={handleClick}>{btnText}</Button>
            <h6>Vehicles In Selected Area:</h6>
        </div>
    );
};

export default DashboardHeader;
