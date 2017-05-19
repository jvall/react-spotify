import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import LikedArtistsPresenter from '../../components/LikedArtists/LikedArtistsPresenter.jsx';

import {likeArtist, unlikeArtist} from '../../actions/artistsActions';

const mapStateToProps = (state) => {
    return {likedArtists: state.artists.likedArtists};
};

const mapDispatchToProps = (dispatch) => {
    return {
        likeArtist: (artist) => {
            dispatch(likeArtist(artist));
        },
        unlikeArtist: (artist) => {
            dispatch(unlikeArtist(artist));
        }
    };
};

const LikedArtists = connect(mapStateToProps, mapDispatchToProps)(LikedArtistsPresenter);

export default LikedArtists;
