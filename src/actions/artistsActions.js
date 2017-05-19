import * as types from '../types/artistsTypes';

export const searchArtists = (payload) => {
    return {type: types.SEARCH_ARTISTS, payload};
};

export const searchArtistsSuccess = (payload) => {
    return {type: types.SEARCH_ARTISTS_SUCCESS, payload};
};

export const searchArtistsFail = (payload) => {
    return {type: types.SEARCH_ARTISTS_FAIL, payload};
};

export const likeArtist = (payload) => {
    return {type: types.LIKE_ARTIST, payload}
};

export const unlikeArtist = (payload) => {
    return {type: types.UNLIKE_ARTIST, payload}
}