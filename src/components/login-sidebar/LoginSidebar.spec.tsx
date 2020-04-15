import React from 'react';
import { shallow } from 'enzyme';
import LoginSidebar from './LoginSidebar';

describe('<LoginSidebar />', () => {
    it('renders without crashing', () => {
        shallow(<LoginSidebar />);
    });
});
