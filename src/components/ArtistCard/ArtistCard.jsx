import React from 'react';
import PropTypes from 'prop-types';
import './ArtistCard.css';

const ArtistCard = ({artist}) => {
    return (
        <div className="ArtistCard">
            <img
                src={(artist.images && artist.images[0])
                ? artist.images[0].url
                : "http://placehold.it/200x200"}/>
            <div className="name">{artist.name}</div>
            <div className="genres">{artist
                    .genres
                    .join(', ')}</div>
        </div>
    );
};

ArtistCard.propTypes = {
    artist: PropTypes.object.isRequired
}

export default ArtistCard