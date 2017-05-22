import * as actions from './artistsActions';
import * as types from '../types/artistsTypes';

describe('Artist Actions', () => {
    it('should create an action to search artists', () => {
        const payload = 'kip moore';
        const expectedAction = {
            type: types.SEARCH_ARTISTS,
            payload
        }
        expect(actions.searchArtists(payload)).toEqual(expectedAction);
    })
})