import './projects.css';
import react,  { useEffect, useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Switch, Routes, useHistory} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Project1 from '../project1/project1';

const projectArr = [
  {
      name: '007 Museum',
      img: "/project1.png",
      url: "https://sleepysealion99.github.io/redesign/",
      path: "/projects/museum_redesign"
  },
  {
      name: 'bakery shop',
      img: "/project2.png",
      url: "https://irenesyr.github.io/react-studio/",
      path: "/projects/bakey_shop"
  },
  {
      name: 'milktea shop',
      img: "/project3.png",
      url: "https://sleepysealion99.github.io/milktea_shop/",
      path: "/projects/milktea_shop"
  },
  {
      name: 'iterative design',
      img: "/project4.png",
      url: "https://calmturtle124.github.io/Iterative/",
      path: "/projects/iterative_design"
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
                  <div className="projectItem" key={index} onClick={event =>  window.location.href=item.path}>
                      
                      <div className="Background" style={{
                          backgroundImage: `url(${item.img})`
                      }}>
                          <div className="DisplayOver">
                          <div className="Hover">
                              <div className="SubTitle">
                              <h2>{item.name}</h2>
                              </div>
                              <div className="Paragraph">
                                Click for more details!
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