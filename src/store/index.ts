import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { customReducer } from './reducers/customReducer';
import { storage } from './middlewares/storage';
import storageModule from 'store2';
import { state } from './state';
import { STORE_NAME } from '../utils';

// load app state from localStorage if it exists
const preloadedState = (storageModule.has(STORE_NAME)) ? storageModule.get(STORE_NAME) : state;

export const store = configureStore({
    reducer: customReducer,
    middleware: [...getDefaultMiddleware(), storage],
    preloadedState
});