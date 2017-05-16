import React from 'react';
import PropTypes from 'prop-types';
import {ArtistCard} from '../ArtistCard/ArtistCard.jsx';
import './ArtistsList.css';

export const ArtistsList = (props) => {

    let cards = props
        .artists
        .map(artist => {
            return (<ArtistCard key={artist.id} artist={artist}/>);
        });

    return (
        <div className="ArtistsList">
            {cards}
        </div>
    );
};
