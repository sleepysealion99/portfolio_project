import logo from './logo.svg';
import './App.css';
import Homepage from './pages/home/homepage';
import Main from './components/Main';
import React, { Component } from "react";
import { Route, HashRouter, Routes, BrowserRouter, Navigate} from "react-router-dom";
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
          <HashRouter basename="/">
            <Routes>
              <Route
                path="/" 
                exact
                element={<Homepage/>}
              />
              <Route
                path="/home" exact element={<Homepage/>}
              />
              <Route
                path="/projects" exact element={<Projects/>}
              />
              <Route
                path="/conatct" exact element={<Homepage/>}
              />
              <Route
                path="/projects/museum_redesign" element={<Project1/>}
              />
              <Route
                path="/projects/bakey_shop" exact element={<Project2/>}
              />
              <Route
                path="/projects/milktea_shop" exact element={<Project3/>}
              />
              <Route
                path="/projects/iterative_design" exact element={<Project4/>}
              />
              <Route path="*" exact element={<Homepage/>} />
            </Routes>
          </HashRouter>
        </div>
    </div>
  );
}

export default App;
