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

    it('renders itself without crashing', () => {
        shallow(<LikedArtistsPresenter artists={artists} />);
    });

    it('renders itself and children without crashing', () => {
        mount(<LikedArtistsPresenter artists={artists} />);
    });
});