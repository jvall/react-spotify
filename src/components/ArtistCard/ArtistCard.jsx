import React from 'react';
import PropTypes from 'prop-types';
import './ArtistCard.css';

const ArtistCard = ({artist, likeArtist, unlikeArtist, likedArtists}) => {
    let handleClick;
    let buttonText = '';
    if(likedArtists.filter((likedArtist) => likedArtist.id === artist.id).length > 0) {
        handleClick = unlikeArtist;
        buttonText = 'Unlike';
    }
    else {
        handleClick = likeArtist;
        buttonText = 'Like';
    }
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
            <button onClick={() => handleClick(artist)}>{buttonText}</button>
        </div>
    );
};

ArtistCard.propTypes = {
    artist: PropTypes.object.isRequired,
    likeArtist: PropTypes.func.isRequired,
    unlikeArtist: PropTypes.func.isRequired,
    likedArtists: PropTypes.array.isRequired
}

export default ArtistCard;

