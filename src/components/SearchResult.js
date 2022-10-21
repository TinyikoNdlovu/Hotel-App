import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';

import "./SearchResult.css";

function SearchResult({img, location, title, description, star, price, total, book}) {

    return(
        <div className="searchresult">
            <img src={img} alt="" />
            <div className="searchresult-top">
                <div className="searchresult-infotop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>----------</p>
                    <p>{description}</p>
                </div>
                <div className="searchresult-infobottom">
                    <div className="searchresult-stars">
                        <StarRateIcon className="searchresult-star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchresult-price">
                        <h2>${price}/night</h2>
                        <p>${total} total</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult

