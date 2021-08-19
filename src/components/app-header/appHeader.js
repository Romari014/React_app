import React from 'react';

import './appHeader.css';

const AppHeader = ({liked, allPost}) => {
    return(
        <div className="app-header d-flex">
            <h1>Roman Tsos</h1>
            <h2>{allPost} posts, liked {liked}</h2>
        </div>
    )
}
export default AppHeader;