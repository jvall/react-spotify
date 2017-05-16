import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import SearchArtistsPresenter from '../../components/SearchArtists/SearchArtistsPresenter.jsx';

import {searchArtists} from '../../actions/artistsActions';

const mapStateToProps = (state) => {
    return {searchResults: state.artists.searchResults};
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            event.preventDefault();
            dispatch(searchArtists(event.target.value));
        }
    };
};

const SearchArtists = connect(mapStateToProps, mapDispatchToProps)(SearchArtistsPresenter);

export default SearchArtists;
