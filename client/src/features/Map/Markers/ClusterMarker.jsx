import React from 'react';
import { useSelector } from 'react-redux';

/**
 * DESC: Component that displays the proper marker type
 * PROPS: 
 *    count: {Number} - The number of vehicles location for the cluster
 */
const ClusterMarker = ({ count }) => {
    const vehiclesPoints = useSelector((state) => state.map.ui.vehiclePoints);

    const clusterMarkerStyle = {
        width: `${10 + (count / vehiclesPoints.length) * 5000}px`,
        height: `${10 + (count / vehiclesPoints.length) * 5000}px`,
    };

    return (
        <div
            className="cluster-marker"
            style={clusterMarkerStyle}
        >
            {count}
        </div>
    );
};

export default ClusterMarker;
