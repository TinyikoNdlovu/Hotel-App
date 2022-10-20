import React from "react";
import "./Home.css";

import Banner from "./Banner";
import Categories from "./Categories";

function Home() {

    return(
        <div className="home">
            <Banner />
            <div className="home-categories">
                
                <Categories/>
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: "center",
                flexDirection: "column", marginTop: "180px", marginBottom: "90px", height: "15vh" }}>
                    <div style={{background: "#58CCED", height: "170px", width: '50%', zIndex: '-1', position: 'absolute'}}></div>
                    <div style={{display: "flex", alignItems: 'center', flexDirection: "column", justifyContent: 'center', 
                    backgroung: 'transparent', zIndex: '1', marginRight: '480px' }}>
                        <h1 style={{color: '#0044FF', marginBottom: "0px"}} className="quote-h1">Fullservice, at your disposal</h1>
                        <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'gray',marginTop: "0px"}} className="quote-h4">More than you can imagine.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home