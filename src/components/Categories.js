import React from "react";

let one = require("");
let two = require("");
let three = require("");
let four = require("");
let five = require("");

const items = [
    {
        image:one,
        text: "Pick-up"
    },
    {
        image:two,
        text: "Soft Drinks"
    },
    {
        image:three,
        text: "Bakery Items"
    },
    {
        image:four,
        text: "Fast Food"
    },
    {
        image:five,
        text: "Deals"
    },
]

function Categories() {

    return(
        <div style={{display: 'flex', justifyContent: 'center',marginTop:"5px",
        padding: '15px', backgroundColor: '#fff', marginBottom: "100px" }}>
            {items.map((item, index) => (
                <div key={index} style={{alignItems: 'center', marginRight: '150px' }}>
                    <img src={items[index].image} alt="" style={{width: '50px', height: '50px', 
                    resizeMode: "contain"}} />
                    <h5 style={{fontFamily: "Lexend",fontSize: '16px', fontWeight: '400', 
                    lineHeight: '20px', letterSpacing: '0.05em', textAlign:'center'}}>{items[index].text}</h5>
                </div>
            ))}
        </div>
    );
}

export default Categories