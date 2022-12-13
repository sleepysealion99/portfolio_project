import './projects.css';
import react,  { useEffect, useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import pic1 from "../../images/pic1.png"
import pic2 from "../../images/pic2.png"
import pic3 from "../../images/pic3.png"
import pic4 from "../../images/pic4.png"


const projectArr = [
    {
        name: 'Persona for station kiosk',
        img: pic1,
        path: "/projects/bakey_shop"
    },
  {
      name: '007 Museum website redesign',
      img: pic2,
      path: '/projects/museum_redesign'
  },
  {
      name: 'iterative design for chowdeck',
      img: pic3,
      path: "/projects/iterative_design"
  },
  {
      name: 'Development of Milktea Shop',
      img: pic4,
      path: "/projects/milktea_shop"
  },
];

function About() {
  // 👇️ redirect to external URL
  window.location.replace('https://google.com');

  return null;
}


export default function Projects() {

    // const navigate = useNavigate();
  
    // const navigateToContacts = () => {
    //     // 👇️ navigate to /contacts
    //   navigate('https://sleepysealion99.github.io/redesign/');
    // };
    const [projectData, setTeaData] = useState(projectArr);


    return (
      <div className="box">
        <div className="head">
            <Navbar />
        </div>
        <div className="content">
            <div className="main">
          <div className="projectsTitle" >
              My recent works!
          </div>
          <div className="projects">
              {projectData.map((item, index) => {
              return (
                  <div className="projectItem" key={index} >
                      
                      <div className="Background" style={{
                          backgroundImage: `url(${item.img})`
                      }}>
                          <div className="DisplayOver">
                          <div className="Hover">
                              <div className="SubTitle">
                              <h2>{item.name}</h2>
                              </div>
                              <div className="Paragraph">
                              <NavLink
                                to={item.path}
                                tag={Link}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: "#78244c"}}
                                >
                                View More
                            </NavLink>
                              </div>
                              
                          </div>
                          </div>
                      </div>
                  </div>
                  );
              })}
              </div>
          </div>
          <Footer/>
          </div>
      </div>
    );
  }