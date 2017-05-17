import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import LikedArtistsPresenter from '../../components/LikedArtists/LikedArtistsPresenter.jsx';

const mapStateToProps = (state) => {
    return {artists: state.artists.likedArtists};
};

const LikedArtists = connect(mapStateToProps)(LikedArtistsPresenter);

export default LikedArtists;
