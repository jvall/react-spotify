import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/"><button>Search</button></Link>
                <Link to="/liked-artists"><button>Liked Artists</button></Link>
            </div>
        );
    }
}

export default Navigation;