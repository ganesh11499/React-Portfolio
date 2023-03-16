import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
     <Link to={'/'}>
        <h1>Portfolio</h1>
     </Link>
     <ul className='nav-menu'>
        <li>
            <Link to={'/'}>
                Home
            </Link>
        </li>
        <li>
            <Link to={'/project'}>
                Project
            </Link>
        </li>
        <li>
            <Link to={'/skills'}>
                Skills
            </Link>
        </li>
        <li>
            <Link to={'/about'}>
                About
            </Link>
        </li>
     </ul>
    </div>
  )
}

export default Navbar
