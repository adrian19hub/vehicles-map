import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

/**
 * DESC: A loader window for the time until the server and google map's api responds
 * PROPS: 
 *    none
 */
const Loader = () => {
    return (
        <div className="loader">
            <Spinner animation="border" />        
            <h1>Fetching data...</h1>
        </div>
    );
};

export default Loader;
