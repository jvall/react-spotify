import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchArtistsPresenter from './SearchArtistsPresenter.jsx';
import SearchArtistsForm from './SearchArtistsForm/SearchArtistsForm.jsx';

describe('<SearchArtistsPresenter />', () => {
    
    const handleChange = jest.fn();
    const likeArtist = jest.fn();
    const unlikeArtist = jest.fn();

    it('renders itself without crashing', () => {
        shallow(<SearchArtistsPresenter 
            searchResults={[]} 
            handleChange={handleChange} 
            likeArtist={likeArtist} 
            unlikeArtist={unlikeArtist}
            likedArtists={[]}
        />);
    });

    it('renders itself and children without crashing', () => {
        mount(<SearchArtistsPresenter 
            searchResults={[]} 
            handleChange={handleChange} 
            likeArtist={likeArtist} 
            unlikeArtist={unlikeArtist}
            likedArtists={[]}
        />);
    });

    it('should have 1 search form', () => {
        const wrapper = shallow(<SearchArtistsPresenter 
            searchResults={[]} 
            handleChange={handleChange} 
            likeArtist={likeArtist} 
            unlikeArtist={unlikeArtist}
            likedArtists={[]}
        />);

        expect(wrapper.find(SearchArtistsForm)).toHaveLength(1);
    });
});