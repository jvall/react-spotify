import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import * as artistsEpics from './artistsEpics';
import * as artistsTypes from '../types/artistsTypes';
import * as artistsActions from '../actions/artistsActions';

const epicMiddleware = createEpicMiddleware(artistsEpics.searchForArtists);
const mockStore = configureMockStore([thunk, epicMiddleware]);

describe('artistsEpics', () => {
  let store;
  const searchTerm = 'test';

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    nock.cleanAll();
    epicMiddleware.replaceEpic(artistsEpics.searchForArtists);
  });

  it('produces the artist model - this test doesnt work yet', () => {
    const payload = { id: 123 };
    nock('https://api.spotify.com/v1')
      .get('/search')
      .reply(200, payload);

    store.dispatch(artistsActions.searchArtists(searchTerm));

    expect(store.getActions()).toEqual([
      { type: artistsTypes.SEARCH_ARTISTS, payload: searchTerm }
    ]);
  });
});