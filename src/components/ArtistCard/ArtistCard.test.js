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

    it('renders itself without crashing', () => {
        shallow(<ArtistCard artist={artist}/>);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<ArtistCard artist={artist}/>);
        expect(tree).toMatchSnapshot();
    });
});