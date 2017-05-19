import * as actions from "../actions/artistsActions";
import * as types from "../types/artistsTypes";
import * as http from "../ajax";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";

export const searchForArtists = (action$, store) => {
  return action$
    .ofType(types.SEARCH_ARTISTS)
    .filter(action => action.payload && action.payload.length > 0)
    .debounceTime(300)
    .switchMap(action => {
      let url = `https://api.spotify.com/v1/search?q=${action.payload}&type=artist`;
      return http
        .get(url)
        .map(response =>
          actions.searchArtistsSuccess(response.response.artists.items)
        );
    });
};
