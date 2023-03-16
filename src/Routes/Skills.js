import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Skillswork from '../Components/Skillswork'
import Work from '../Components/Work'

const Skills = () => {
  return (
    <div className='bg-dark'>
     <Navbar/>
     <Work heading="SKillS" text1="Full Stack" text2="Developer"/>
     <Skillswork/>
     <Footer/>
    </div>
  )
}

export default Skills
