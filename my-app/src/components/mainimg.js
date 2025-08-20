import "./mainstyles.css";

import React from 'react'

import Introimg from "../assets/photo_2024-08-11_11-54-48.jpg"
import { Link } from "react-router-dom";

const mainimg = () => {
  return (
    <div className="main">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg"/>
      </div>
      <div className="content">
        <p>Hi, I'm Akhil</p>
        <h1>Software Engineer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default mainimg
