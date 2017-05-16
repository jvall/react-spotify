import React from 'react';
import PropTypes from 'prop-types';

const SearchArtistsForm = ({handleChange}) => {
    return (
        <div className="SearchArtists">
            <form onSubmit={handleChange}>
                <label>
                    Artist Name:
                    <input type="text" placeholder="Enter a name..." onChange={handleChange}/>
                </label>
            </form>
        </div>
    );
};

SearchArtistsForm.propTypes = {
    handleChange: PropTypes.func.isRequired
};

export default SearchArtistsForm;