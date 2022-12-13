import './project4.css';
import react,  { useEffect, useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Project4() {

    return (
      <div className="box">
        <div className="head">
            <Navbar />
        </div>
        <div className="content">
        <div className="main">
            <div className="projectsTitle" >
                Iterative Design for Chowdeck
            </div>
            <div className="websitePic" >
                <img src="/project4.png" style={{width: "80%", height: "80%"}} class="center" onClick={event =>  window.open("https://calmturtle124.github.io/Iterative/")}></img>
            </div>
            <div className="sectionTitle">
                Context
            </div>
            <div className="section">
            &emsp;For this project, we want to design an interactive interface for an emerging startup. The main goal of the design will focus on the problem that the startup is working on. My group chose Chowdeck as the company to deisgn an interface for. Chowdeck is is an on-demand food delivery mobile App like Uber Eats, but only for Africa. Chowdeck is on a mission to empower restaurants in Africa to deliver meals to customers anywhere and anytime, and customers can buy food in a few short steps and have it delivered to their doorstep in under 30 minutes.
            </div>
            <div className="sectionTitle">
                Research & Feedback
            </div>
            <div className="section">
            &emsp; Chowdeck is a food delievery company. According to our research and feedback from our friends, most people order food delivery on phone since it is the most accessible device for most. Therefore we decide to design interface for Chowdeck App on phone. The main goal of Chowdeck is to deliever food in 30 minutes, so we want to make sure the App only has essentail steps to operate. We want to make sure that users can achieve their goals in shortest time. We also want to filter out restaurants which can be delievered in 30 minutes so that users would not waste time on far restaurants.
            </div>
            <div className="sectionTitle">
                Design Iterations
            </div>
            <div className="section">
                We start the design from low-fi prototypes. These design only includes frames. All members in our group make their own design. We will then discuss about these designs.<br></br><br></br>
                Member1:<br></br>
                <div className="memberDesign">
                <img src='/project4/sketch1p1.jpeg' class="design"></img>
                <img src='/project4/sketch1p2.jpeg' class="design"></img>
                <img src='/project4/sketch1p3.jpeg' class="design"></img>
                </div>
                Member2:<br></br>
                <div className="memberDesign">
                <img src='/project4/sketch1p1.jpeg' class="design"></img>
                <img src='/project4/sketch1p2.jpeg' class="design"></img>
                <img src='/project4/sketch1p3.jpeg' class="design"></img>
                </div>
                Member3:<br></br>
                <div className="memberDesign">
                <img src='/project4/sketch1p1.jpeg' class="design"></img>
                <img src='/project4/sketch1p2.jpeg' class="design"></img>
                <img src='/project4/sketch1p3.jpeg' class="design"></img>
                </div>
                Member4:<br></br>
                <div className="memberDesign">
                <img src='/project4/sketch1p1.jpeg' class="design"></img>
                <img src='/project4/sketch1p2.jpeg' class="design"></img>
                <img src='/project4/sketch1p3.jpeg' class="design"></img>
                </div>
            </div>
            <div className="sectionTitle">
                Conclusion
            </div>
            <div className="section">
            It is a website target at fans of Jame Bond. It is the website for Jame Bond museum. I choose this website because it has a good idea and bad page design. It needs redesign to attract more users.
            </div>
            </div>
            <Footer/>
            </div>
      </div>
    );
  }