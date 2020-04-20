import * as actions from './reducerActions';
import * as constants from './appConstants';
import * as messages from './appMessages';
import { store } from '../store';
import { FormProps } from 'antd/lib/form/Form';

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

export const defaultFormProps: FormProps = {
    layout: 'vertical',
    hideRequiredMark: true,
    colon: false,
};
