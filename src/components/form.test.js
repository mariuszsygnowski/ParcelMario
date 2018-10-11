import React from 'react';
import Form from './Form.js';
import { shallow } from 'enzyme';

describe('dafsdf', () => {
    //
    // test('what to test', () => {
    //     const wrapper = shallow(<Form />);
    //     const instance = wrapper.instance();
    //     instance.heightBox('FOO');
    //     const textHeightBoxFromState = wrapper.state('textHeightBox');
    //     expect(textHeightBoxFromState).toBe('FOO');
    // });

    test('handleClick testing', () => {
        const wrapper = shallow(<Form />);
        const instance = wrapper.instance();
        instance.handleClick(event);

        const preventDefault = wrapper.preventDefault();
        expect(preventDefault).toBe(event.preventDefault());

        const displayOffOn = wrapper.state('displayOffOn');
        expect(displayOffOn).toBe('displayBlock');
    });

});