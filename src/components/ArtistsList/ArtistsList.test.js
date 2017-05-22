import React from 'react';
import { shallow, mount } from 'enzyme';
import ArtistsList from './ArtistsList.jsx';
import ArtistCard from '../ArtistCard/ArtistCard.jsx';

describe('<ArtistsList />', () => {

    //Initialize 2 artists
    let artists = [
        {
            'id': 1,
            'name': 'test',
            'images': [{
                url: 'test'
            }],
            'genres': ['test', 'test']
        },
        {
            'id': 2,
            'name': 'test',
            'image': [{
                url: 'test'
            }],
            'genres': ['test', 'test']
        }
    ];

    const likeArtist = jest.fn();
    const unlikeArtist=jest.fn();

    it('renders itself without crashing', () => {
        shallow(<ArtistsList 
            artists={artists}
            likedArtists={[]}
            likeArtist={likeArtist}
            unlikeArtist={unlikeArtist}
        />);
    });

    it('renders itself and children without crashing', () => {
        mount(<ArtistsList 
            artists={artists}
            likedArtists={[]}
            likeArtist={likeArtist}
            unlikeArtist={unlikeArtist}
        />);
    });

    it('should contain 2 ArtistCards', () => {
        const wrapper = mount(<ArtistsList 
            artists={artists}
            likedArtists={[]}
            likeArtist={likeArtist}
            unlikeArtist={unlikeArtist}
        />);
        expect(wrapper.find(ArtistCard)).toHaveLength(2);
    }); 
});