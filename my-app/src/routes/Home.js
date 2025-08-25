import React from 'react'
import Navbar from '../components/Navbar'
import Mainimg from "../components/mainimg.js"
import Footer from '../components/Footer.js'
import Work from '../components/Work'



const Home = () => {
  return (
    <div>
        <Navbar/>
        <Mainimg />
        <Work/>
        <Footer />
    </div>
  )
}

export default Home
