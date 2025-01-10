import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/nav.js"
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import "./styles/app.css";
import Background from "./Background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";

const App = () => {
  return (
  <Router>
    <Nav/>
    <Background/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats/>
  </Router>
  );
}

export default App;
