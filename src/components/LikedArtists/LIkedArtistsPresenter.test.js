import React from 'react';
import { shallow, mount } from 'enzyme';
import LikedArtistsPresenter from './LikedArtistsPresenter.jsx';

describe('<LikedArtistsPresenter />', () => {

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
    const unlikeArtist = jest.fn();

    it('renders itself without crashing', () => {
        shallow(<LikedArtistsPresenter 
            likedArtists={artists}
            likeArtist={likeArtist}
            unlikeArtist={unlikeArtist} />);
    });

    it('renders itself and children without crashing', () => {
        mount(<LikedArtistsPresenter 
            likedArtists={artists}
            likeArtist={likeArtist}
            unlikeArtist={unlikeArtist} />);
    });
});