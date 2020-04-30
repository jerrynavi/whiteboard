import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { appReducer } from './reducers/appReducer';
import { storage } from './middlewares/storage';
import storageModule from 'store2';
import { state } from './state';
import { constants } from '../utils';
import { userReducer } from './reducers/userReducer';
import { boardReducer } from './reducers/boardReducer';

// load app state from localStorage if it exists
const preloadedState = (storageModule.has(constants.STORE_NAME)) ? storageModule.get(constants.STORE_NAME) : state;

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
        activeBoard: boardReducer,
    },
    middleware: [...getDefaultMiddleware(), storage],
    preloadedState,
});