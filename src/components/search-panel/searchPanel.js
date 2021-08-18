import React from 'react';

import './searchPanel.css';

const SearchPanel = () => {
    return (
        <div>
            <input className="form-control search-input " type="text" placeholder="Search for posts"></input>
        </div>
    )
}

export default SearchPanel;