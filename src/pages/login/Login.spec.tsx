import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('<Login />', () => {
    it('Login renders', () => {
        shallow(
            <Login />,
        );
    });
    
    it('is Login page', () => {
        // to do
    });
});
