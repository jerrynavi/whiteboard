import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

const rendered = shallow(<Login />);

describe('<Login />', () => {
    it('Login renders', () => {
        shallow(
            <Login />,
        );
    });
    
    it('is Login page', () => {
        expect(rendered.contains(
            <title>Login</title>,
        )).toEqual(true);
    });
});
