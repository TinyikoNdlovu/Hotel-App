import React from "react";
import "./Banner.css";
import { Button } from '@mui/material';

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
                <div>
                    <div className="banner-main-div">
                        <div className="booking-header">
                            <h4>Arrival Date</h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default Banner