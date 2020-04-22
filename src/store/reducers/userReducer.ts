import { createReducer, createAction } from '@reduxjs/toolkit';
import { state } from '../state';

export const userReducer = createReducer(state.user, {
    SAVE_USER_DATA: (user, { payload }) => {
        user = null;
        user = payload;
        return user;
    },
    UPDATE_USER_DATA: (user, { payload }) => {
        if (!user) {
            user = payload;
            return user;
        }
        user = {
            ...user,
            ...payload,
        };
    },
    REMOVE_USER_DATA: (user) => {
        user = null;
        return user;
    },
});

createAction('SAVE_USER_DATA');
createAction('UPDATE_USER_DATA');
createAction('REMOVE_USER_DATA');
