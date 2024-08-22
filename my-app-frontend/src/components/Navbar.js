import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <nav>
            <input
                type="text"
                placeholder="Type a country name"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </nav>
    );
};

export default Navbar;
