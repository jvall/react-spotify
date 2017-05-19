import React from "react";
import PropTypes from "prop-types";

import SearchArtistsForm from "./SearchArtistsForm/SearchArtistsForm.jsx";
import ArtistsList from "../ArtistsList/ArtistsList.jsx";

const SearchArtistsPresenter = ({ handleChange, searchResults, likeArtist, unlikeArtist, likedArtists}) => {
  return (
    <div>
      <SearchArtistsForm handleChange={handleChange} />
      <ArtistsList 
        artists={searchResults} 
        likeArtist={likeArtist} 
        unlikeArtist={unlikeArtist}
        likedArtists={likedArtists}
      />
    </div>
  );
};

SearchArtistsPresenter.propTypes = {
  searchResults: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  likeArtist: PropTypes.func.isRequired,
  unlikeArtist: PropTypes.func.isRequired,
  likedArtists: PropTypes.array.isRequired
};

export default SearchArtistsPresenter;
