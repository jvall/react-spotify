import * as actions from '../actions/artistsActions';
import * as types from '../types/artistsTypes';
import {Observable} from 'rxjs/Observable';
import {ajax} from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

export const searchForArtists = (action$, store) => action$
    .ofType(types.SEARCH_ARTISTS)
    .filter(action => action.payload && action.payload.length > 0)
    .debounceTime(300)
    .switchMap(action => {
        return ajax({url: `https://api.spotify.com/v1/search?q=${action.payload}&type=artist`, method: 'GET', responseType: 'json', withCredentials: false, crossDomain: true}).map(response => {
            return actions.searchArtistsSuccess(response.response.artists.items);
        });
    });