/* eslint-disable react/no-array-index-key */
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const IdList = () => {
    const selectedVehiclesIds = useSelector((state) => state.map.selectedVehiclesIds);
    return (
      <div className="ids-list">
        <ListGroup>
          {selectedVehiclesIds.map((id, index) => (
            <ListGroup.Item key={index}>
              ID:
              {' '}
              {id}
            </ListGroup.Item>
))}
        </ListGroup>
      </div>
    );
};

export default IdList;
