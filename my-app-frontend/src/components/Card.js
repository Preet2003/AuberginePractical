import React from 'react';

const Card = ({ university }) => {
    return (
        <>
            <div class="card" style={{width: '18rem', border:'2px solid black'}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/College_Full_view-1.jpg/320px-College_Full_view-1.jpg" class="card-img-top" style={{width:'287px'}} alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{university.name}</h5>
                        <p class="card-text">{university.country}</p>
                        <a href={university.web_pages[0]} class="btn btn-primary">Download</a>
                    </div>
            </div>
        </>
    );
};

export default Card;
