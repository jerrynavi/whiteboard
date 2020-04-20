import * as actions from './reducerActions';
import * as constants from './appConstants';
import * as messages from './appMessages';
import { store } from '../store';

export {
    constants,
    actions,
    messages,
};

export const toggleLoading = (): void => {
    store.dispatch({
        type: actions.TOGGLE_LOADING,
    });
};
