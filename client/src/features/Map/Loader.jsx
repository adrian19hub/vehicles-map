import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    return (
      <div className="loader">
        <Spinner animation="border" />        
        <h1>Fetching data...</h1>
      </div>
    );
};

export default Loader;
