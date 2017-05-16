import React from 'react';
import PropTypes from 'prop-types';

const SearchArtistsForm = props => {
    return (
        <div className="SearchArtists">
            <form onSubmit={props.handleChange}>
                <label>
                    Artist Name:
                    <input type="text" placeholder="Enter a name..." onChange={props.handleChange}/>
                </label>
            </form>
        </div>
    );
};

SearchArtistsForm.propTypes = {
    handleChange: PropTypes.func.isRequired
};

export default SearchArtistsForm;