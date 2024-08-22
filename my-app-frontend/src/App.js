import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

const App = () => {
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://universities.hipolabs.com/search?name=middle');
            console.log(response);
            const myJson = await response.json();
            setData(myJson);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            const filtered = data.filter(university=>
                university.country.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredUniversities(filtered);
        } else {
            setFilteredUniversities([]);
        }
    }, [searchQuery, data]);

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
