import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = () => {
    return (
        <>
            <div className="container">
                <div className="row" style={{margin:'12px'}}>
                    <div className="col-md-3">
                        <div className="card" style={{width: '100%'}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/College_Full_view-1.jpg/320px-College_Full_view-1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{width: '100%'}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/College_Full_view-1.jpg/320px-College_Full_view-1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{width: '100%'}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/College_Full_view-1.jpg/320px-College_Full_view-1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{width: '100%'}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/College_Full_view-1.jpg/320px-College_Full_view-1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <a href="#" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
