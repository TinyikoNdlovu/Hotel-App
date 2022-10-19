import React, { useState } from "react";
import "./Banner.css";
import { Button } from '@mui/material';
import { format } from "date-fns";
import { DateRange } from "react-date-range";

let vector = require("../assets/vector.png");
let adult = require("../assets/adult.png");
let child = require("../assets/child.png");
let arrowdown = require("../assets/sort-down-arrow.png");
let arrowup = require("../assets/sort-up-arrow.png");

function Banner() {

    const [date, setDate] = useState([    'date is assigned a value but never used',
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    return(
    <>
        <div className="banner">
            <div className="banner-search">
                <DateRange editableDateInputs ={true}
                onChange ={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection ={false}
                ranges ={date}
                className='date'
                minDate={new Date()} />
            </div>
            <div className="banner-info">
                <h4>Enjoy your vacation with Royale Hotels</h4>
                <h1 style={{marginTop: '0px', color: "#58CCED"}}>Let us plan you a perfect International Holiday</h1>
                <Button style={{backgroundColor: "#58CCED"}}>Explore Now</Button>
            </div>
        </div>
        <div className="booking-div">
            <div className="booking">
                <div style={{display: "flex", alignItems: '"center', justifyContent: "center", flexDirection: "row"}}>
                    <div className="banner-main-div">
                        <div className="booking-header">
                            <img className="booking-vector" alt="" src={vector} />
                            <h4 style={{marginTop: "10"}}>Arrival Date</h4>
                            <img className="booking-vector2" alt="" src={arrowdown} />
                        </div>

                        <div className="booking-bof">
                           <h2>date</h2>
                           <h4>date</h4>
                        </div>
                    </div>

                    <div className="banner-main-div">
                        <div className="booking-header">
                            <img className="booking-vector" alt="" src={vector} />
                            <h4>Check Out</h4>
                            <img className="booking-vector2" alt="" src={arrowdown} />
                        </div>

                        <div className="booking-bof">
                           <h2>date</h2>
                           <h4>date</h4>
                        </div>
                    </div>

                    <div className="banner-main-div">
                        <div className="booking-header">
                            <img className="booking-vector" alt="" src={adult} style={{marginBottom: "10"}} />
                            <h4>Adults</h4>
                        </div>

                        <div className="booking-bo">
                           <h2>2</h2>
                           <div className="booking-select">
                           <div>
                            <img src={arrowup} alt="" style={{height: "28px"}}/>
                           </div>
                           <div>
                            <button style={{border: "none", backgroundColor: "trans"}}>
                            <img src={arrowdown} alt="" style={{height: "24px"}}/>
                            </button>
                           </div>
                        </div>
                           </div>
                    </div>

                    <div className="banner-main-div">
                        <div className="booking-header">
                            <img className="booking-vector" alt="" src={child} style={{marginBottom: "10"}} />
                            <h4>Children</h4>
                        </div>

                        <div className="booking-bo">
                           <h2>2</h2>
                          <div className="booking-select">
                          <div>
                            <img src={arrowup} alt="" style={{height: "28px"}}/>
                           </div>
                           <div>
                            <button style={{border: "none", backgroundColor: "trans"}}>
                            <img src={arrowdown} alt="" style={{height: "24px"}}/>
                            </button>
                           </div>
                        </div>
                          </div>
                    </div>

                    <div className="banner-main-div" style={{paddingTop: "0px"}}>
                        <h4 className="fadded-text">Hope you have an Amazing Experience ...</h4>
                        <div className="booking-button">
                            <button>Check Availability</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default Banner