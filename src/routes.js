import SearchArtists from './containers/SearchArtists/SearchArtists.jsx';
import LikedArtists from './containers/LikedArtists/LikedArtists.jsx';

export const routes = [
    {   path: '/search',
        component: SearchArtists
    },
    {   path: '/liked-artists',
        component: LikedArtists
    }
];