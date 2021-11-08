/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import mapReducer from './slices/mapSlice';

export const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});
