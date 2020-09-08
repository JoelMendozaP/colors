import { createSlice } from '@reduxjs/toolkit';

const Model = createSlice({
    name: 'theme',
    initialState: {
        value: 'dark'
    },
    reducers: {
        toggle: state => { state.value = state.value === 'dark'?'light':'dark'; }
    }
});

export const currentTheme = state => state.theme.value;
export const { toggle } = Model.actions;
export default Model.reducer;

