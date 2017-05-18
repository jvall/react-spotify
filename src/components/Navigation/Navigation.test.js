import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';

describe('<Navigation />', () => {
    it('renders itself without crashing', () => {
        shallow(<Navigation />);
    });

    it('should have 2 links', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Link)).toHaveLength(2);
    });
});