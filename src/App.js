
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Project from './Routes/Project';
import Skills from './Routes/Skills';
import About from './Routes/About';

const App = () => {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
   </div>
  )
}

export default App
