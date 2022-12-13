import './homepage.css';
import react,  { useEffect, useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import avatar from '../../images/avatar.JPG';

export default function Homepage() {
    return (
        <div className="box">
            
            <div className="head">
                <Navbar />
            </div>
            <div className="content">
            <div className="main">
            <div className="profile">
                Hi there!<br></br>  I'm Sleepy sealion! <br></br> Software Development Engineer!
                <div className="avatar">
                <img src={avatar} style={{width: "80%", height: "80%", borderRadius: "60%"}} ></img>
                </div>

            <div className="division">
                <hr></hr>
            </div>
                <p>I'm a CS master student at Brown University.<br></br> 
                I have strong basis in multiple languages such as Python, C, Java, C++. <br></br> 
                I was graduated from UCSD with a bachelor degree in Computer Science.<br></br> 
                Welcome to checkout on some of my selected projects!</p>
            </div>
            </div>
            <Footer/>
            </div>
        </div>
    );
}