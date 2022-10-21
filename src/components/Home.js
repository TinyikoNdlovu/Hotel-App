import React from "react";
import "./Home.css";

import Banner from "./Banner";
import Categories from "./Categories";
import Card from "./Card";
import Advantages from "./Advantages";
import Footer from "./Footer";

let  p1 = require("../assets/intercontinental-hotel.jpg");
let  p2 = require("../assets/south-beach-camps-bay.jpg");
let  p3 = require("../assets/the-residence-hotel.jpg");
let  p4 = require("../assets/pod-camps-bay-boutique.jpg");

function Home() {

    return(
        <div className="home" style={{height: '100vh'}}>
            <Banner />
            <div className="home-categories">
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: "center",
                flexDirection: "column", marginTop: "180px", marginBottom: "90px", height: "15vh" }}>
                    <div style={{background: "#58CCED", height: "170px", width: '50%', zIndex: '-1', position: 'absolute'}}></div>
                    <div style={{display: "flex", alignItems: 'center', flexDirection: "column", justifyContent: 'center', 
                    backgroung: 'transparent', zIndex: '1', marginRight: '480px' }}>
                        <h1 style={{color: '#0044FF', marginBottom: "0px"}} className="quote-h1">
                            Full service, at your disposal</h1>
                        <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        color: 'gray',marginTop: "0px"}} className="quote-h4">More than you can imagine.</h4>
                    </div>
                </div>
                
                <Categories/>
                <div style={{display: '', alignItems: 'center', justifyContent: "center",
                flexDirection: "column", marginTop: "60px", marginBottom: "120px", height: "15vh" }}>
                    <div style={{background: "#58CCED", height: "170px", width: '50%', zIndex: '-1', position: 'absolute'}}></div>
                    <div style={{display: "flex", alignItems: 'center', flexDirection: "column", justifyContent: 'center', 
                    backgroung: 'transparent', zIndex: '1', marginRight: '480px' }}>
                        <h1 style={{color: '#0044FF', marginBottom: "0px"}} className="quote-h1">
                            Choose what's Best for you!</h1>
                        <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        color: 'gray',marginTop: "0px"}} className="quote-h4">Make your vacation Comfortable.</h4>
                    </div>
                </div>
            </div>

            <div className="home-section">
                <Card src={p1} title="InterContinental Johannesburg O.R.Tambo Airport, an IHG Hotel" description="InterContinental Johannesburg OR Tambo Airport Hotel, is a safe short 69 m walk from the bustling OR Tambo Airport terminal building, offering a tranquil oasis for guests seeking a little respite from the frenetic world of travel. 
                All rooms are soundproofed and have deluxe bedding and furniture. Our room amenities include air conditioning, satellite TV, complimentary Wi-Fi and a fully stocked tea/coffee station." />
                
                <Card src={p2} title="South Beach Camps Bay Boutique Hotel" description="South Beach, a boutique hotel situated in Camps Bay, offers award winning 5-star luxury accommodation and is situated less than 50m to the world famous Camps Bay beach front and the internationally recognized Blue Flag beach. With its Miami inspired look 
                and feel, South Beach offers the perfect blend of self-catering accommodation in a 5-star hotel, allowing you to enjoy the best of both worlds. All 19 suites are sea facing and range from 41m2 to 107m2 and include either a balcony or private patio area, and the exclusive use of two swimming pools. There is a private gym, a 
                guest laundry, complimentary bicycles and many other services and facilities." />
                
                <Card src={p3} title="The Residence Boutique Hotel" description="The Residence is a five star boutique hotel which is truly one of a kind. No effort has been spared in creating a warm, luxurious, elegant and inviting atmosphere. With eighteen designer suites with ultimate comfort and privacy, here you can sit back and take
                 in the views of the garden, tennis court and pools. Explore the serene sanctuary of the senses with our spa and unwind in the sauna and steam room." />

            </div>

            <div>
                <h1 className="quotes-card">Royale Hotels stand a true paragon of world class hospitality and have some of the best luxury hotels and resorts in South Africa and also provides everything you need for a luxury accomodation. Great savings, good availability, best deals and great rates!</h1>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: "center",
                flexDirection: "column", marginTop: "60px", marginBottom: "120px", height: "15vh" }}>
                    <div style={{background: "#58CCED", height: "170px", width: '50%', zIndex: '-1', position: 'absolute'}}></div>
                    <div style={{display: "flex", alignItems: 'center', flexDirection: "column", justifyContent: 'center', 
                    backgroung: 'transparent', zIndex: '1', marginRight: '480px' }}>
                        <h1 style={{color: '#0044FF', marginBottom: "0px"}} className="quote-h1">
                            Luxury Redefined.</h1>
                        <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        color: 'gray',marginTop: "0px"}} className="quote-h4">Luxury is Personal!</h4>
                    </div>
                </div>

                <div className="some-quotes">
                    <h4> At Royale Hotels We provide travellers with an efficient and reliable online guide to assist with hotel, 
                        transport and activity bookings all the way from Johannesburg, Durban and Cape Town in South Africa to 
                        exotic destinations such as Tanzania, Kenya, Mozambique and Madagascar. We offer a wide variety of carefully
                         selected accommodation options to ensure that unique travel requirements are met for business trips, romantic
                          getaways, successful conferences, memorable family holidays, golf and beach vacations as well as luxurious 
                          train journeys. Through our years of experience we can tailor-make travel arrangements to suit every budget 
                          ranging from rustic country lodges in the Drakensberg and budget city hotels in Johannesburg to the most 
                          exclusive luxury beach retreat in Durban. Royale Hotels offer a safe and secure environment, authentic 
                          hospitality, thoughtful service, lavish accomodation and world class facilities.</h4>
                </div>

                <Advantages />
                <div style={{display: '', alignItems: 'center', justifyContent: "center",
                flexDirection: "column", marginTop: "60px", marginBottom: "120px", height: "15vh" }}>
                    <div style={{background: "#58CCED", height: "170px", width: '50%', zIndex: '-1', position: 'absolute'}}></div>
                    <div style={{display: "flex", alignItems: 'center', flexDirection: "column", justifyContent: 'center', 
                    backgroung: 'transparent', zIndex: '1', marginRight: '480px' }}>
                        <h1 style={{color: '#0044FF', marginBottom: "0px"}} className="quote-h1">
                            They Loved Our Hospitality.</h1>
                        <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        color: 'gray',marginTop: "0px"}} className="quote-h4">Explore the world with Ease!</h4>
                    </div>
                </div>

                <Footer />
        </div>
    )
}

export default Home