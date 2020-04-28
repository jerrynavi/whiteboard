import React from 'react';
import { shallow } from 'enzyme';
import BoardPreview from './BoardPreview';

describe('<BoardPreview />', () => {
    it('renders', () => {
        shallow(
            <BoardPreview>
                <p>Hello board</p>
            </BoardPreview>,
        );
    });
});
