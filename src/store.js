import { configureStore } from '@reduxjs/toolkit';
import sceneReducer from './features/sceneSlice';

export const store = configureStore({
    reducer: {
        scene: sceneReducer,
    }
});