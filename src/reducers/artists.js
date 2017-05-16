import * as artistsTypes from '../types/artistsTypes';

const initialState = {
    searchResults: []
};

export const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case artistsTypes.SEARCH_ARTISTS_SUCCESS:
            return Object.assign({}, state, {searchResults: action.payload});

        default:
            return state;
    }
};
