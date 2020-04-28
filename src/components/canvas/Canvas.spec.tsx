import React from 'react';
import { shallow } from 'enzyme';
import Canvas from './Canvas';

describe('<Canvas />', () => {
    it('renders', () => {
        shallow(<Canvas />);
    });
});
