import * as artistsTypes from '../types/artistsTypes';

const initialState = {
    searchResults: [],
    likedArtists: []
};

export const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case artistsTypes.SEARCH_ARTISTS_SUCCESS:
            return Object.assign({}, state, {searchResults: action.payload});

        case artistsTypes.LIKE_ARTIST:
            return Object.assign({}, state, {likedArtists: [
                    ...state.likedArtists,
                    Object.assign({}, action.payload)
                ]}
            );
            
        case artistsTypes.UNLIKE_ARTIST: 
            return Object.assign({}, state, {likedArtists: [
                    ...state.likedArtists.filter(likedArtist => likedArtist.id !== action.payload.id)
                ]}
            );

        default:
            return state;
    }
};
