import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';

export const customReducer = createReducer(state, {
    CUSTOM_DATA_UPDATE: (state, action) => {
        state.data = action.payload;
        return state;
    }
});
createAction('CUSTOM_DATA_UPDATE');
