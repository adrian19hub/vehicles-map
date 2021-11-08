/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { mapActions } from '../slices/mapSlice';

const fetchVehiclesLocations = () => {
    const fetchVehiclesLocationsThunk = async (dispatch) => {
        try {
            const fetchData = async () => {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/vehicles`);
                return response.data;
            };
            const vehiclesLocations = await fetchData();
            dispatch(mapActions.getVehiclesLocations(vehiclesLocations));
        } catch (error) {
            console.log(error);
        }
    };

    return fetchVehiclesLocationsThunk;
};

const fetchVehicleIds = (coordinates) => {
    const fetchVehicleIdsThunk = async (dispatch) => {
        try {
            const fetchData = async () => {
                const newCoordinates = coordinates.map((coordinate) => [coordinate.lat, coordinate.lng]);
                const coordinatesJson = JSON.stringify(newCoordinates);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/vehicles/ids/${coordinatesJson}`);
                return response.data;
            };
            const vehicleIds = await fetchData();
            dispatch(mapActions.getSelectedVehiclesIds(vehicleIds));
        } catch (error) {
            console.log(error);
        }
    };

    return fetchVehicleIdsThunk;
};

export { fetchVehiclesLocations, fetchVehicleIds };
