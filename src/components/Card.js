import React from "react";

import "./Card.css";

function Card({src, title, description, price}) {

    return(
        <div className="card">
            <img src={src} alt="" />
            <div className="card-info">
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
            <div className="card-button">
                <button>Book Now</button>
            </div>
        </div>
    );
}

export default Card


