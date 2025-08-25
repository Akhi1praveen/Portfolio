import React from "react";
import "./index.css"
import Home from "./routes/Home.js";
import Project from "./routes/project.js";
import About from "./routes/about.js";
import Contact from "./routes/contact.js";
import { Route, Routes } from "react-router-dom";
import Navbar from '../src/components/Navbar'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/project" element={<Project />}/>
    </Routes>
    </>
  );
}

export default App;
