/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

/**
 * DESC: List of ids component
 * PROPS: none
 */
const IdList = () => {
    const selectedVehiclesIds = useSelector((state) => state.map.data.selectedVehiclesIds);
    
    return (
        <div className="ids-list">
            <ListGroup variant="flush" numbered>
                {selectedVehiclesIds.map((id, index) => (
                    <ListGroup.Item key={index}>
                    ID: {id}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default IdList;
