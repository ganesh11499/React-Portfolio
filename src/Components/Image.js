import React from 'react'
import './Image.css'
import table from '../Photos/table.jpg'

const Image = () => {
  return (
    <div className='hero col-lg-12 col-sm-12'>
        <img className='imagelap' src={table} alt="laptop image"/>
        <div className='content text-center'>
            <p className='text-light fw-bolder'>IAM GANESH</p>
            <h2 className='text-info fw-bolder'>REACT </h2>
            <h2 className='text-danger fw-bolder'>Developer</h2>
        </div>
    </div>
  )
}

export default Image
