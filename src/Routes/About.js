import React from 'react'
import Aboutwork from '../Components/Aboutwork'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Work from '../Components/Work'

const About = () => {
  return (
    <div className='bg-dark'>
   <Navbar/>
   <Work heading="About"/>
   <Aboutwork/>
   <Footer/>
    </div>
  )
}

export default About
