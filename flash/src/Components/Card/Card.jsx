import React from "react";
import './Card.css';


function Card({onClick}){
    return (
    <div className="card" onClick={onClick }>
      <div className="card-back">Answer</div>
      <div className="card-front">Question</div>
    </div>
    );
}

export default Card;