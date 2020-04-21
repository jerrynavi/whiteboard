/* eslint-disable react/jsx-key */
import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <LoginForm />
            </Provider>,
        );
    });

    it('is form', () => {
        // to do
    });
});
