import React from 'react'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div className='bg-dark'>
    <Navbar/>
    <Work heading="PROJECTS" text1="Some of my recent" text2="projects"/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default Project
