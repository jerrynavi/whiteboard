import React from 'react';
import { shallow } from 'enzyme';
import Canvas from './Canvas';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('<Canvas />', () => {
    it('renders', () => {
        shallow(
            <Provider store={store}>
                <Canvas />
            </Provider>,
        );
    });
});
