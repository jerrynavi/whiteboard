/* eslint-disable react/jsx-key */
import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        shallow(<LoginForm />);
    });

    it('is form', () => {
        // to do
    });
});
