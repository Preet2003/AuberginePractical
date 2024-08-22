import React from 'react';

const Card = ({ university }) => {
    return (
        <div className="card">
            <h2>{university.name}</h2>
            <p>{university.country}</p>
            <a href={university.web_pages[0]}>{university.web_pages[0]}</a>
        </div>
    );
};

export default Card;
