import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';

export const appReducer = createReducer(state.app, {
    TOGGLE_LOADING: (app) => {
        app.isLoading = !app.isLoading;
    },
    UPDATE_CURRENT_URL: (app, { payload }) => {
        app.currentUrl = payload;
    },
    TOGGLE_AUTH_STATE: (app) => {
        app.isLoggedIn = false;
    },
});

createAction('TOGGLE_LOADING');
createAction('UPDATE_CURRENT_URL');
createAction('TOGGLE_AUTH_STATE');
