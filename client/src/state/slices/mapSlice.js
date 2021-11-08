import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    vehiclesLocations: [],
    selectedVehiclesIds: [],
    loading: true,
    selectingArea: false,
};

const mapSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        getVehiclesLocations(state, action) {
            state.vehiclesLocations = action.payload;
            state.loading = false;
        },
        getSelectedVehiclesIds(state, action) {
            state.selectedVehiclesIds = action.payload;
        },
        initSelectingArea(state) {
            state.selectingArea = true;
        },
        disableSelectingArea(state) {
            state.selectingArea = false;
            state.selectedVehiclesIds = [];
        },
    },
});
  
export const mapActions = mapSlice.actions;

export default mapSlice.reducer;
