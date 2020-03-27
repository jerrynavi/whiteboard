/*
    Middleware to save state to localStorage after every dispatch.
    You can replace with your own storage method within the `Promise.resovle()` method
*/

import storageModule from 'store2';
import { STORE_NAME } from '../../utils/';

export const storage = (store: any) => (next: any) => (action: any): any => {
    const result = next(action);
    Promise.resolve(storageModule.set(STORE_NAME, store.getState()));
    return result;
};