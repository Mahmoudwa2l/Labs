import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="container">
        <div className="row">
      <div className="col-md-4 mb-5">
        <div className="card">
          <img src="movie-poster1.jpg" className="card-img-top" alt="Movie Poster 1" />
          <div className="card-body">
            <h5 className="card-title">Movie Title 1</h5>
            <p className="card-text">Movie Description 1</p>
            <a href="#1" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5">
        <div className="card">
          <img src="movie-poster2.jpg" className="card-img-top" alt="Movie Poster 2" />
          <div className="card-body">
            <h5 className="card-title">Movie Title 2</h5>
            <p className="card-text">Movie Description 2</p>
            <a href="#1" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-5">
        <div className="card">
          <img src="movie-poster3.jpg" className="card-img-top" alt="Movie Poster 3" />
          <div className="card-body">
            <h5 className="card-title">Movie Title 3</h5>
            <p className="card-text">Movie Description 3</p>
            <a href="#1" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
}

export default Card;
