import { FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import "./footerstyles.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <div>
                    <p>Home adress</p>
                    <p>jasjn</p>
                </div>
            </div> 
            <div className="Phone">
                <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    664545464
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    ajsncjan@mail.com
                </h4>
            </div>
        </div >
        <div className="right">
            <div className="about">
                <h4>about</h4>
                <p>ksdoqnocsnoqnconqsokcqokscoknqoksn oqconqokcnokncoqn
                    wcnqoscnqnvvb oqwnqokwncoqn
                    cwoqnkwcoqwcnoqnwckon oqnoqnwoknwndqnodn</p>
            </div>
            <div className="social">
                <FaFacebook size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaTwitter size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaGithub size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
