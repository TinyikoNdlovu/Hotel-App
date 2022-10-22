import React, { useEffect, useState } from "react";

import "./Header.css";
import Logo from "../assets/royale-hotels-low-resolution-logo-color-on-transparent-background.png";
import { Button, Input, Modal } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import {auth, db} from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { makeStyles } from '@mui/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const usestyles = makeStyles((theme) =>({
    paper: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid gray",
        bobxShadow: 24,
        p:  4,
    },
}));

function Header() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();
    const classes = usestyles();
    const [modelStyle] = useState(getModalStyle);
    const [openSignin, setOpenSignin] = useState(false);
    const [user, setUser] = useState(null);
    const[open, setOpen] = useState(false);

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                setUser(authUser);
            }
            else{
                setUser(null);
            }
        })
    }, [user,email])

    const signUp = async (event) => {
        event.preventDefault();
        try{
            const authUser = await auth.createUserWithEmailAndPassword(email,password)
            db.collection("users").doc(authUser.email).set({
                owner_uis:authUser.uid,
                email:authUser.email,
                
            })
        }
        catch(error){
            alert(error.message)
        }
        setOpen(false);
    }

    const signIn = async (event) => {
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email,password)
            setOpenSignin(false);
        }
        catch(error){
            alert(error.message)
        }
        setOpen(false);
    }

    return(
        <div className="header" style={{marginTop: 15}}>
            <Modal className="modal" open={open} onClose={() => setOpen(false)} >
                <div style={modelStyle} className={classes.paper}>
                    <form className="app-signup" style={{padding: '50px', backgroundColor: '#fff'}}>
                        <Input placeholder="email" type="email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="password" type="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" onClick={() => (signUp, navigate("/"))} style={{backgroundColor: '#58CCED'}}>Sign Up</Button>
                    </form>
                </div>
            </Modal>
            <Modal open={openSignin} onClose={() => setOpenSignin(false)}  >
                <div style={modelStyle} className={classes.paper}>
                    <form className="app-signup" style={{padding: '50px', backgroundColor: '#fff'}}>
                        <Input placeholder="email" type="email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="password" type="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" onClick={signIn} style={{backgroundColor: '#58CCED'}}>Sign In</Button>
                    </form>
                </div>
            </Modal>
            <Link to="/" style={{textDecoration: 'none'}}>
                <img className="header-logo" alt="" src={Logo} />
            </Link>
            <div className="header-center">
                <div className="center-button">Home</div>
                <div className="center-button">Rooms & Suits</div>
                <div className="center-button">Offers</div>
                <div className="center-button">My Bookings</div>
                <div className="center-button">Profile</div>
            </div>
            <div className="header-right">
                {
                    user ? (
                    <div className="headercontainer">
                        <Button className="header-button" onClick={() => (auth.signOut(), navigate("/")) }>Log Out</Button>
                    </div>

                    ):(
                    <>
                    <div className="headercontainer">
                        <Button className="header-button" onClick={() => setOpen(true)}>Sign Up</Button>
                    </div>
                    <div className="headercontainer">
                        <Button className="header-button" onClick={() => setOpenSignin(true)}>Log In</Button>
                    </div>
                    </>

                    )}
            </div>
        </div>
    )
}

export default Header