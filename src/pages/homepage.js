import './homepage.css';
import react,  { useEffect, useState } from 'react';
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import Overlay from 'react-bootstrap/Overlay';
// import avocadoYog from './images/avocado-yog.png';
// import mochiUbec from './images/mochi-ube.png';
// import mochiOreo from './images/mochi-oreo.png';
// import mochiChestnut from './images/mochi-chestnut.png';
// import whitePeach from './images/white-peach.png';
// import avomango from './images/avomango.png';
// import HoverPage from './hover';
// import styled from '@emotion/styled';
// import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
// import { color } from 'overlay';

const projectArr = [
  {
      name: '007 Museum',
      img: "/project1.png",
      url: "https://sleepysealion99.github.io/redesign/"
  },
  {
      name: 'bakery shop',
      img: "/project2.png",
      url: "https://irenesyr.github.io/react-studio/"
  },
  {
      name: 'milktea shop',
      img: "/project3.png",
      url: "https://sleepysealion99.github.io/milktea_shop/"
  },
  {
      name: 'iterative design',
      img: "/project4.png",
      url: "https://calmturtle124.github.io/Iterative/"
  },
];

// const DisplayOver = styled.div({
//   height: "100%",
//   left: "0",
//   position: "absolute",
//   top: "0",
//   width: "100%",
//   transition: "background-color 350ms ease",
//   backgroundColor: "transparent",
//   padding: "20px 20px 0 20px",
//   boxSizing: "border-box",
//   "&:hover": {
//     backgroundColor: "rgba(0,0,0,.5)",
//   }
// });

// const Paragraph = styled.p({
//   transform: "translate3d(0,50px,0)",
//   transition: "transform 350ms ease",
//   // "&:hover": {
//   //   transform: "translate3d(0,0,0)",
//   // }
// });

// const CTA = styled.a({
//   position: "absolute",
//   bottom: "20px",
//   left: "20px",
// });

// const Background = styled.div({
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   color: "#FFF",
//   position: "relative",
//   width: "500px",
//   height: "350px",
//   cursor: "pointer",
//   background: "url(${props => props.img})",
// });

// const BigTitle = styled.h2({
//   textTransform: "uppercase",
//   fontFamily: "Helvetica",
//   color: "black",
// });

function About() {
  // 👇️ redirect to external URL
  window.location.replace('https://google.com');

  return null;
}

export default function Homepage() {

  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //     // 👇️ navigate to /contacts
  //   navigate('https://sleepysealion99.github.io/redesign/');
  // };
  const [projectData, setTeaData] = useState(projectArr);
  
  return (
    <div className="box">
        <div className="head">
        <div className="name">
            <h1>Sleepysealion99</h1>
        </div>
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="profile">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="projects">Link</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
        <div className="main">
        <div className="profile">
            <h2>Hi there! I'm Sleepysealion99.</h2>
            <p>I'm a CS master student at Brown University. I have strong basis in multiple languages such as Python, C, Java, C++. 
            I was graduated from UCSD with a bachelor degree in Computer Science. Welcome to checkout on some of my selected projects.</p>
        </div>
        <div className="projects">
            {projectData.map((item, index) => {
            return (
                <div className="projectItem" key={index}>
                    
                    <div className="Background" style={{
                        backgroundImage: `url(${item.img})`
                    }}>
                        <div className="DisplayOver">
                        {/* <div className="BigTitle">
                            <h2>{item.name}</h2>
                        </div> */}
                        <div className="Hover">
                            <div className="SubTitle">
                            <h2>{item.name}</h2>
                            </div>
                            <div className="Paragraph">
                            <a href={item.url} target="_blank" rel="noreferrer">Click for more details about this really cool project!</a>
                            </div>
                            {/* <Router>
                            <div> 
                                <a href={item.url} target="_blank" rel="noreferrer">
                                website
                                </a>
                            </div>
                            </Router>
                            <div className="CTA"><a>View More +</a></div> */}
                        </div>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
        </div>
        <div className="footer">
            <h1>Crafted by Sleepysealion99</h1>
        </div>
    </div>
  );
}