import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

/**
 * DESC: List of ids component
 * PROPS: none
 */
const IdList = () => {
    const selectedVehiclesIds = useSelector((state) => state.map.data.selectedVehiclesIds);
    
    const displayIds = () => {
        return selectedVehiclesIds.map((id, index) => (
            <ListGroup.Item key={index}>
            {id}
            </ListGroup.Item>
        ))
    }
    
    return (
        <div className="ids-list">
            <ListGroup variant="flush" numbered>
                {selectedVehiclesIds.length 
                    ? displayIds()
                    : <p>There are no vehicles in selected area</p>}
            </ListGroup>
        </div>
    );
};

export default IdList;
