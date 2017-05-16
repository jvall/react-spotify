import React from 'react';
import PropTypes from 'prop-types';
import {ArtistCard} from '../ArtistCard/ArtistCard.jsx';
import './ArtistsList.css';

const ArtistsList = ({artists}) => {

    let cards = artists
        .map(artist => {
            return (<ArtistCard key={artist.id} artist={artist}/>);
        });

    return (
        <div className="ArtistsList">
            {cards}
        </div>
    );
};

ArtistsList.propTypes = {
    artists: PropTypes.array.isRequired
};

export default ArtistsList
