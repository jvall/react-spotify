import {artistsReducer} from './artists.js';
import * as types from '../types/artistsTypes';

const initialState = {
    searchResults: [],
    likedArtists: []
};

const actionLikeArtistOne = {
    type: types.LIKE_ARTIST,
    payload: {
        name:'test',
        id: 1
    }
}

const actionLikeArtistTwo = {
    type: types.LIKE_ARTIST,
    payload: {
        name:'testTwo',
        id: 2
    }
}

const stateOne = {
    searchResults: [],
    likedArtists: [actionLikeArtistOne.payload]
}

const stateTwo = {
    searchResults: [],
    likedArtists: [actionLikeArtistOne.payload, actionLikeArtistTwo.payload]
}

describe('Artist Reducers', () => {
    it('should return the intial state', () => {
        expect(artistsReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle like artist', () => {
        expect(artistsReducer(undefined, actionLikeArtistOne)).toEqual(stateOne);
        expect(artistsReducer(stateOne, actionLikeArtistTwo)).toEqual(stateTwo);
    });

    it('should handle unlike artist', () => {
        const actionUnlikeArtist = {
            type: types.UNLIKE_ARTIST,
            payload: actionLikeArtistTwo.payload
        }

        expect(artistsReducer(stateTwo, actionUnlikeArtist)).toEqual(stateOne);
    });

    it('should handle searching for artist', () => {
        const actionSearchArtists = {
            type: types.SEARCH_ARTISTS_SUCCESS,
            payload: {
                name: 'test'
            }
        };

        expect(artistsReducer(undefined, actionSearchArtists)).toEqual({
            searchResults: actionSearchArtists.payload,
            likedArtists: []
        })
    })
});