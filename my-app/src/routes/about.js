import React from 'react'
import Navbar from '../components/Navbar'
import Mainimg2 from '../components/mainimg2'
import Footer from '../components/Footer'
import Aboutcontent from '../components/Aboutcontent'

const about = () => {
  return (
    <div>
      <Navbar/>
      <Mainimg2 heading="About" text="I am an Aspiring software developer."/>
      <Aboutcontent/>
     <Footer/>
    </div>
  )
}

export default about
