import React from "react";
import Logo from "../assets/royale-hotels-low-resolution-logo-color-on-transparent-background.png"

import "./Footer.css";

let facebook = require("../assets/facebook.png");
let instagram = require("../assets/instagram.png");
let twitter = require("../assets/twitter.png");
let linkedin = require("../assets/linkedin.png");

let location = require("../assets/location.png");
let post = require("../assets/post.png");
let phone = require("../assets/phone.png");

function Footer() {

    return(

        <div className="footer-top">
            <div className="footer">
                <div className="footer-left">
                    <img className="logo-header-footer" src={Logo} alt="" />
                    <div style={{display: 'flex', alignItems: 'center', 
                    justifyContent: 'space-between', width: '300px'}}>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="footer-right">
                    <div style={{display: 'flex', alignItems: 'center', 
                    padding: '10px' }} className="address-footer">
                        <img src={location} alt="" style={{marginLeft: '34px', width: '19px', backgroundColor: '#fff' }} />
                        Shop No.6/26C, Lillian Ngoyi Rd, Fifth Ave, Sandton, Johannesburg, 1693
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', 
                    padding: '10px' }}>
                        <img src={post} alt="" style={{marginLeft: '34px', width: '19px', backgroundColor: '#fff' }} />
                        testing@gmail.com
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', 
                    padding: '10px' }}>
                        <img src={phone} alt="" style={{marginLeft: '34px', width: '19px', backgroundColor: '#fff' }} />
                        +011 4567893
                    </div>
                </div>
                
            </div>
            <div className="footer-bottom" style={{backgroundColor: '#1261A0'}}>
                <p>Copyright ©2022 All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer


