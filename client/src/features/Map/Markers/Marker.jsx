import React from 'react';
import ClusterMarker from './ClusterMarker';
import VehicleMarker from './VehicleMarker';

/**
 * DESC: Component the rendering of the proper marker type
 * PROPS: 
 *    count: {Number} - The number of vehicles location for the cluster
 */
const Marker = ({ count }) => {
    return (
        <div className="location-marker">
            {!count // if count = 0 its not a cluster
                ? <VehicleMarker />
                : (
                    <ClusterMarker 
                        count={count} 
                    />
                ) 
            }
        </div>
    );
};

export default Marker;
