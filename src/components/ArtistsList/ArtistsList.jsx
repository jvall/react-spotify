import React from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../ArtistCard/ArtistCard.jsx';
import './ArtistsList.css';

const ArtistsList = ({artists, likeArtist, unlikeArtist, likedArtists}) => {

    let cards = artists
        .map(artist => {
            return (
                <ArtistCard 
                    key={artist.id} 
                    artist={artist} 
                    likeArtist={likeArtist}
                    unlikeArtist={unlikeArtist}
                    likedArtists={likedArtists}
                />
            );
        });

    return (
        <div className="ArtistsList">
            {cards}
        </div>
    );
};

ArtistsList.propTypes = {
    artists: PropTypes.array.isRequired,
    likeArtist: PropTypes.func.isRequired,
    unlikeArtist: PropTypes.func.isRequired,
    likedArtists: PropTypes.array.isRequired
};

export default ArtistsList;
