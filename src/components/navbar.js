import React, { Component } from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = "#ffe4ed";
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

export default function Navbar() {
      const link = "home";
      return (
          <div>
            <header className="header">
              <NavLink to="/home" tag={Link} className="logo">
                {/* <span > &lt;</span> */}
                <span className="logo-name" >
                  Sleepy Sealion
                </span>
                {/* <span >/&gt;</span> */}
              </NavLink>
              <ul className="menu">
                <li>
                  <NavLink
                    to="/home"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: "#a16e83" }}
                    onMouseEnter={(event) => onMouseEnter(event)}
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: "#a16e83" }}
                    onMouseEnter={(event) => onMouseEnter(event)}
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    tag={Link}
                    activeStyle={{ fontWeight: "bold" }}
                    style={{ color: "#a16e83" }}
                    onMouseEnter={(event) => onMouseEnter(event)}
                    onMouseOut={(event) => onMouseOut(event)}
                  >
                    Contact Me
                  </NavLink>
                </li>
              </ul>
            </header>
          </div>
      );
    }
  