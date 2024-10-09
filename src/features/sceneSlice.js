import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    background: '',
}

export const sceneSlice = createSlice({
 name: 'scene',
 initialState,
 reducers: {
    setBackground: (state, action) => {
        state.background = action.payload;
    },
 }
});

export const { setBackground } = sceneSlice.actions;

export default sceneSlice.reducer;