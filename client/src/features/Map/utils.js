/* eslint-disable react/no-array-index-key */
/* eslint-disable import/prefer-default-export */
import { store } from '../../state/store';
import { mapActions } from '../../state/slices/mapSlice';

const handleMapChange = (zoom, bounds) => {
    store.dispatch(mapActions.setZoom(zoom));
    store.dispatch(mapActions.setBounds([
        bounds.nw.lng,
        bounds.se.lat,
        bounds.se.lng,
        bounds.nw.lat,
    ]));
};

export { handleMapChange };
