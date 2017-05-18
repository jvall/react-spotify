import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchArtistsPresenter from './SearchArtistsPresenter.jsx';
import SearchArtistsForm from './SearchArtistsForm/SearchArtistsForm.jsx';

describe('<SearchArtistsPresenter />', () => {
    it('renders itself without crashing', () => {
        const handleChange = jest.fn();
        shallow(<SearchArtistsPresenter searchResults={[]} handleChange={handleChange}/>);
    });

    it('renders itself and children without crashing', () => {
        const handleChange = jest.fn();
        mount(<SearchArtistsPresenter searchResults={[]} handleChange={handleChange}/>);
    });

    it('should have 1 search form', () => {
        const handleChange = jest.fn();
        const wrapper = shallow(<SearchArtistsPresenter searchResults={[]} handleChange={handleChange} />);
        expect(wrapper.find(SearchArtistsForm)).toHaveLength(1);
    });
});