import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';

export const appReducer = createReducer(state.app, {
    TOGGLE_LOADING: (app) => {
        app.isLoading = !app.isLoading;
    },
    UPDATE_CURRENT_URL: (app, { payload }) => {
        app.currentUrl = payload;
    },
});

createAction('TOGGLE_LOADING');
createAction('UPDATE_CURRENT_URL');
