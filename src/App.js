import logo from './logo.svg';
import './App.css';
import Homepage from './pages/home/homepage';
import Main from './components/Main';
import React, { Component } from "react";
import { Route, HashRouter, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Projects from "./pages/projects/projects";
import Project1 from "./pages/project1/project1";
import Project2 from "./pages/project2/project2";
import Project3 from "./pages/project3/project3";
import Project4 from "./pages/project4/project4";
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div>
          <BrowserRouter>
            <Routes>
              <Route
                path="/" element={<Homepage/>}
              />
              <Route
                path="/home" element={<Homepage/>}
              />
              <Route
                path="/projects" element={<Projects/>}
              />
              <Route
                path="/conatct" element={<Homepage/>}
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
              <Route path="*" element={<Homepage/>} />
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
