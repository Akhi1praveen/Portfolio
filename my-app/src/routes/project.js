import React from 'react'
import Navbar from '../components/Navbar'
import Mainimg2 from '../components/mainimg2'
import Footer from '../components/Footer'
import Pricingcard from '../components/Pricingcard'
import Work from '../components/Work'

const project = () => {
  return (
    <div>
      <Navbar/>
      <Mainimg2 heading="Projects" text="Some of my most recent works."/>
      <Work/>
      <Pricingcard/>
     <Footer/>
    </div>
  )
}

export default project
