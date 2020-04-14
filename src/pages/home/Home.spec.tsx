import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('renders', () => {
    shallow(
        <MemoryRouter>
            <Home />
        </MemoryRouter>,
    );
});
