import React from 'react';
import './Card.css';

function Card(props) {
  return (
   
      <div className="col-md-3 mb-5">
        <div className="card width">
          <img src={props.poster} className="card-img-top img" alt="Movie Poster 1" />
          <div className="card-body width">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Date : {props.date}</p>
            <a href="#1" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    
    
  );
}

export default Card;
