import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { appReducer } from './reducers/appReducer';
import { storage } from './middlewares/storage';
import storageModule from 'store2';
import { state } from './state';
import { constants } from '../utils';

// load app state from localStorage if it exists
const preloadedState = (storageModule.has(constants.STORE_NAME)) ? storageModule.get(constants.STORE_NAME) : state;

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
    middleware: [...getDefaultMiddleware(), storage],
    preloadedState
});