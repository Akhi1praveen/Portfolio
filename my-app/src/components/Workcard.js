import "./Workcardstyle.css"
import React from 'react'
 
import { Link } from "react-router-dom"

const Workcard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="image"></img>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btn">
                        <Link to={props.view} className="btn">View</Link>
                        <Link to={props.view} className="btn">Source</Link>
                    </div>
                </div>
            </div>
  )
}

export default Workcard
