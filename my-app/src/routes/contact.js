import React from 'react'
import Navbar from '../components/Navbar'
import Mainimg2 from '../components/mainimg2'
import Footer from '../components/Footer'
import Form from '../components/Formcard'

const contact = () => {
  return (
    <div>
      <Navbar/>
      <Mainimg2 heading="Contact" text="Lets chat here."/>
      <Form/>
     <Footer/>
    </div>
  )
}

export default contact