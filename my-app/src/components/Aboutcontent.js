import { Link } from "react-router-dom"
import "./Aboutcontentstyle.css"
import React from 'react'
import cont1 from "../assets/photo_2024-08-11_11-44-07.jpg"
import cont2 from "../assets/photo_2024-08-11_11-44-10.jpg"

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>vdsaivjiasbdvoiasdbvjoisjvjias bdovibdvbaosjdbvoiajsd iidba ibddib jjdb oaidj bijbdvoabdjob SD.</p>
        <Link to="/contact"><button className="btn">CONTACT</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={cont1} className="img" alt="reactimg"></img>
          </div>
          <div className="img-stack bottom">
            <img src={cont2} className="img" alt="reactimg"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent
