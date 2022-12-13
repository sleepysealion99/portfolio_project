import './project3.css';
import react,  { useEffect, useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Project3() {

    return (
      <div className="box">
        <div className="head">
            <Navbar />
        </div>
        <div className="content">
        <div className="main">
            <div className="projectsTitle" >
                Milktea Shop Website Design
            </div>
            <div className="websitePic" >
                <img src="/project3.png" style={{width: "60%", height: "60%"}} class="center" onClick={event =>  window.open("https://sleepysealion99.github.io/007museum/")}></img>
            </div>
            <div className="sectionTitle">
                Context
            </div>
            <div className="section">
            It is a website target at fans of Jame Bond. It is the website for Jame Bond museum. I choose this website because it has a good idea and bad page design. It needs redesign to attract more users.
            </div>
            <div className="sectionTitle">
                Research & Feedback
            </div>
            <div className="section">
            It is a website target at fans of Jame Bond. It is the website for Jame Bond museum. I choose this website because it has a good idea and bad page design. It needs redesign to attract more users.
            </div>
            <div className="sectionTitle">
                Design Iterations
            </div>
            <div className="section">
            It is a website target at fans of Jame Bond. It is the website for Jame Bond museum. I choose this website because it has a good idea and bad page design. It needs redesign to attract more users.
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