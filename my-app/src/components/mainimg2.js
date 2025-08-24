import "./mainimg2.css"
import React from 'react'

const mainimg2 = (props) => {
  return (
    <div className="main-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
} 

export default mainimg2
