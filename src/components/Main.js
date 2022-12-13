import React, { Component } from "react";
import { Route, HashRouter, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "../pages/home/homepage";
import Projects from "../pages/projects/projects";
import Project1 from "../pages/project1/project1";
import Project2 from "../pages/project2/project2";
import Project3 from "../pages/project3/project3";
import Project4 from "../pages/project4/project4";

export default function Main () {
      return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route
                exact path="/" element={<Homepage/>}
              />
              <Route
                exact path="/home" element={<Homepage/>}
              />
              <Route
                exact path="/projects" element={<Projects/>}
              />
              <Route
                exact path="/conatct" element={<Homepage/>}
              />
              <Route
                path="/projects/museum_redesign" element={<Project1/>}
              />
              <Route
                path="/projects/bakey_shop" element={<Project2/>}
              />
              <Route
                path="/projects/milktea_shop" element={<Project3/>}
              />
              <Route
                path="/projects/iterative_design" element={<Project4/>}
              />
            </Routes>
          </BrowserRouter>
        </div>
      );
    
  }

