import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import SearchArtistsPresenter from '../../components/SearchArtists/SearchArtistsPresenter.jsx';

import {searchArtists, likeArtist, unlikeArtist} from '../../actions/artistsActions';

const mapStateToProps = (state) => {
    return {
        searchResults: state.artists.searchResults,
        likedArtists: state.artists.likedArtists
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            event.preventDefault();
            dispatch(searchArtists(event.target.value));
        },
        likeArtist: (artist) => {
            dispatch(likeArtist(artist));
        },
        unlikeArtist: (artist) => {
            dispatch(unlikeArtist(artist));
        }
    };
};

const SearchArtists = connect(mapStateToProps, mapDispatchToProps)(SearchArtistsPresenter);

export default SearchArtists;
