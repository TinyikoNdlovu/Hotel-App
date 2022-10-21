import { FoodBankSharp } from "@mui/icons-material";
import React from "react";
import "./Advantages.css";

let six = require("../assets/breakfast.png");
let seven = require("../assets/wifi.png");
let eight = require("../assets/car.png");
let nine = require("../assets/airplane-ticket.png");
let ten = require("../assets/car-parking.png");

const items = [
    {
        image:six,
        text:"BREAKFAST",
        subtext:'There has never been a sadness that cannot be cured with breakfast foods.'
    },
    {
        image:seven,
        text:"WIFI",
        subtext:'Get the best wifi connectivity without any interference.'
    },
    {
        image:eight,
        text:"PICKUP",
        subtext:'Ride out of town at affordable one-way and round-trip fares with us intercity travel service.'
    },
    {
        image:nine,
        text:"AIR TICKETS",
        subtext:'Flight booking, cheap air tickets of domestic & international airlines with us.'
    },
    {
        image:ten,
        text:"FREE PARKINGS",
        subtext:'Free parkings will be provided, feel like Home.'
    },
]


function Advantages() {

    return(
    <>
        <div className="advantages">
            <div className="advantages-info">
                <div className="advantages-header">
                    <h1>Advantages of Staying with Us</h1>
                    <h4>Sapien gravida dolor comodo.</h4>
                </div>
                <div style={{justifyContent: 'center', marginTop: 5, marginLeft: '5%'}}>
                    {items.map((item, index) => (
                        <div key={index} style={{alignItems: 'center', 
                         marginRight: 30, display: 'flex', marginLeft: '143px'}}>
                            <img src={items[index].image} className='advantages-img' alt='' style={{backgroundColor: '#fff'}} />
                            <div>
                            <h5 className="advantages-h5">
                                {items[index].text}
                            </h5>
                            <h5 className="advantages-h">
                                {items[index].subtext}
                            </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>

    );
}

export default Advantages


