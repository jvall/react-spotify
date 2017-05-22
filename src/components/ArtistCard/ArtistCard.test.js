import React from 'react';
import { shallow } from 'enzyme';
import ArtistCard from './ArtistCard.jsx';
import renderer from 'react-test-renderer';

describe('<ArtistCard />', () => {

    let artist ={
        'id': 1,
        'name': 'test',
        'images': [{
            url: 'test'
        }],
        'genres': ['test', 'test']
    };

    const likeArtist = jest.fn();
    const unlikeArtist=jest.fn();

    it('renders itself without crashing', () => {
        shallow(<ArtistCard 
            artist={artist}
            likedArtists={[]}
            likeArtist={likeArtist}
            unlikeArtist={unlikeArtist} />);
    });

    it('renders correctly', () => {
        const wrapper = renderer.create(<ArtistCard 
            artist={artist}
            likedArtists={[]}
            likeArtist={likeArtist}
            unlikeArtist={unlikeArtist} />);
        
        expect(wrapper).toMatchSnapshot();
    });
});