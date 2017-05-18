import React from "react";
import PropTypes from "prop-types";

import SearchArtistsForm from "./SearchArtistsForm/SearchArtistsForm.jsx";
import ArtistsList from "../ArtistsList/ArtistsList.jsx";

const SearchArtistsPresenter = ({ handleChange, searchResults }) => {
  return (
    <div>
      <SearchArtistsForm handleChange={handleChange} />
      <ArtistsList artists={searchResults} />
    </div>
  );
};

SearchArtistsPresenter.propTypes = {
  searchResults: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchArtistsPresenter;
