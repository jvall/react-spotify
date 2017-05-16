import {combineEpics} from 'redux-observable';
import {searchForArtists} from './artistsEpics';

const rootEpic = combineEpics(searchForArtists);

export default rootEpic;