import React from "react";
import "./Banner.css";
import { Button } from '@mui/material';

let vector = require("../assets/vector.png");
let adult = require("../assets/adult.png");
let child = require("../assets/child.png");
let arrow= require("../assets/downfilledtriangulararrow.png");

function Banner() {

    return(
    <>
        <div className="banner">
            <div className="banner-info">
                <h4>Enjoy your vacation with Royale Hotels</h4>
                <h1 style={{marginTop: '0px', color: "#EB8A04"}}>Let us plan you a perfect International Holiday</h1>
                <Button>Explore Now</Button>
            </div>
        </div>
        <div className="booking-div">
            <div className="booking">
                <div style={{display: "flex"}}>
                    <div className="banner-main-div">
                        <div className="booking-header">
                            <img className="booking-vector" alt="" src={vector} />
                            <h4>Arrival Date</h4>
                            <img className="booking-vector2" alt="" src={arrow} />
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
                            <img className="booking-vector2" alt="" src={arrow} />
                        </div>

                        <div className="booking-bof">
                           <h2>date</h2>
                           <h4>date</h4>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default Banner