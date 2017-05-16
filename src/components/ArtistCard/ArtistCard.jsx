import React from 'react';
import './ArtistCard.css';

export const ArtistCard = (props) => {
    return (
        <div className="ArtistCard">
            <img
                src={(props.artist.images && props.artist.images[0])
                ? props.artist.images[0].url
                : "http://placehold.it/200x200"}/>
            <div className="name">{props.artist.name}</div>
            <div className="genres">{props
                    .artist
                    .genres
                    .join(', ')}</div>
        </div>
    );
};
