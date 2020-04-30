import { State } from '../interfaces/state.interface';

export const state: State = {
    app: {
        isLoading: false,
        currentUrl: '/',
        isLoggedIn: true,
    },
    user: null,
    activeBoard: null,
};