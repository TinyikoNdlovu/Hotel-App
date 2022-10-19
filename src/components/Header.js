import React from "react";

import "./Header.css";
import Logo from "../assets/royale-hotels-low-resolution-logo-color-on-transparent-background.png";
import { Button } from '@mui/material';

function Header() {

    return(
        <div className="header" style={{marginTop: 15}}>
            <img className="header-logo" style={{width: 120}} alt="" src={Logo} />
            <div className="header-center">
                <div className="center-button">Home</div>
                <div className="center-button">Rooms & Suits</div>
                <div className="center-button">Offers</div>
                <div className="center-button">My Bookings</div>
                <div className="center-button">Profile</div>
            </div>
            <div className="header-right">
                <div className="headercontainer">
                    <Button className="header-button">Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default Header