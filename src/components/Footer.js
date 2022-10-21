import React from "react";
import Logo from "../assets/royale-hotels-low-resolution-logo-color-on-transparent-background.png"

import "./Footer.css";

function Footer() {

    return(

        <div className="footer-top">
            <div className="footer">
                <div className="footer-left">
                    <img className="logo-header-footer" src={Logo} alt="" />
                    <div style={{display: 'flex', alignItems: 'center', 
                    justifyContent: 'space-between', width: '300px'}}>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="footer-right">
                    <div style={{display: 'flex', alignItems: 'center', 
                    padding: '10px' }} className="address-footer">
                        <img src="" alt="" style={{marginLeft: '34px', width: '19px' }} />
                        Shop No.6/26C, Lillian Ngoyi Rd, Fifth Ave, Sandton, Johannesburg, 1693
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', 
                    padding: '10px' }}>
                        <img src="" alt="" style={{marginLeft: '34px', width: '19px' }} />
                        testing@gmail.com
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', 
                    padding: '10px' }}>
                        <img src="" alt="" style={{marginLeft: '34px', width: '19px' }} />
                        +011 4567893
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2022 All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer


