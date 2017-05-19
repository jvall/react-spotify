import React from 'react';
import PropTypes from 'prop-types';

import ArtistsList from '../ArtistsList/ArtistsList.jsx';

const LikedArtistsPresenter = ({likedArtists, likeArtist, unlikeArtist}) => {
    if(likedArtists.length > 0)
        return (
            <div>
                <ArtistsList 
                    artists={likedArtists} 
                    likeArtist={likeArtist} 
                    unlikeArtist={unlikeArtist}
                    likedArtists={likedArtists}
                />
            </div>
        );
    else {
        return (
            <div>
                You have not liked any artists! Start searching!
            </div>
        )
    }
};

LikedArtistsPresenter.propTypes = {
    likedArtists: PropTypes.array.isRequired,
    likeArtist: PropTypes.func.isRequired,
    unlikeArtist: PropTypes.func.isRequired,
};

export default LikedArtistsPresenter;