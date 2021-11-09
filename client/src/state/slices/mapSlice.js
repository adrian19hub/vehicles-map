import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        vehiclesLocations: [],
        selectedVehiclesIds: [],
        loading: true,
    },
    ui: {
        selectingArea: false,
        vehiclePoints: [],
        clusters: [],
        zoom: null,
        bounds: null,
    },
    
};

const mapSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        getVehiclesLocations(state, action) {
            state.data.vehiclesLocations = action.payload;
            state.data.loading = false;
        },
        getSelectedVehiclesIds(state, action) {
            state.data.selectedVehiclesIds = action.payload;
        },
        initSelectingArea(state) {
            state.ui.selectingArea = true;
        },
        disableSelectingArea(state) {
            state.ui.selectingArea = false;
            state.data.selectedVehiclesIds = [];
        },
        setVehiclePoints(state, action) {
            state.ui.vehiclePoints = action.payload;
        },
        setClusters(state, action) {
            state.ui.clusters = action.payload;
        },
        setZoom(state, action) {
            state.ui.zoom = action.payload;
        },
        setBounds(state, action) {
            state.ui.bounds = action.payload;
        },
    },
});
  
export const mapActions = mapSlice.actions;

export default mapSlice.reducer;
