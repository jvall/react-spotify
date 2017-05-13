import React from 'react';

export const ArtistCard = (props) => {
    return (
        <div className="ArtistCard">
            <img src={props.artist.photo}/>
            <div className="name">{props.artist.name}</div>
            <div className="genres">{props
                    .artist
                    .genres
                    .join(', ')}</div>
        </div>
    );
};
