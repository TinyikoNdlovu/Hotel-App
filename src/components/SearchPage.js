import { Button } from "@mui/material";
import React, { useState } from "react";

import "./SearchPage.css";
import SearchResult from "./SearchResult";

let room1 = require("../assets/hotelroom.jpg");
let room2 = require("../assets/terrace-pool-plus-suite.jpg"); 

const rooms = [
    {
        img: room1,
        location: "johannesburg",
        title:'two rooms',
        description: 'nice place',
        star: "4",
        price: '23',
        total: '233',
    },
    {
        img: room2,
        location: "johannesburg",
        title:'two rooms',
        description: 'nice place',
        star: "4",
        price: '23',
        total: '233',
    },
    {
        img: room2,
        location: "johannesburg",
        title:'two rooms',
        description: 'nice place',
        star: "4",
        price: '23',
        total: '233',
    },
]

function SearchPage() {

    const [userData, setUserData] = useState([]);

    return(
        <div className="searchpage">
            <div className="searchpage-data">
                <Button variend="outline">User Name</Button>
                <Button variend="outline">User Email</Button>
            </div>
            {rooms.map((data, index) => (
                <SearchResult key={index}
                img={data.img}
                price={data.price}
                location={data.location}
                title={data.title}
                description={data.description}
                star={data.star}
                total={data.total} />
            ))}
        </div>
    );
}

export default SearchPage

