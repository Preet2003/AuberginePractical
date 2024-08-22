import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import universitiesData from './world_universities_and_domains.json'; // Your JSON data file

const App = () => {
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery) {
            const filtered = universitiesData.filter(university =>
                university.country.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredUniversities(filtered);
        } else {
            setFilteredUniversities([]);
        }
    }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <div className="card-container" style={gridContainerStyle}>
                {filteredUniversities.length > 0 ? (
                    filteredUniversities.map((university, index) => (
                        <Card key={index} university={university} />
                    ))
                ) : (
                    <p>No universities found for the specified country.</p>
                )}
            </div>
        </div>
    );
};

const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
};

export default App;