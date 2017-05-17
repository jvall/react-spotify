import React from 'react';
import PropTypes from 'prop-types';

import ArtistsList from '../ArtistsList/ArtistsList.jsx';

const LikedArtistsPresenter = ({artists}) => {
    return (
        <div>
            Liked Artists
        </div>
    );
};

LikedArtistsPresenter.propTypes = {
    artists: PropTypes.array.isRequired
};

export default LikedArtistsPresenter;