import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';

export const appReducer = createReducer(state.app, {
    TOGGLE_LOADING: (app) => {
        app.isLoading = !app.isLoading;
    },
});

createAction('TOGGLE_LOADING');
