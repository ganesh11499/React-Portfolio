import React, { Component } from 'react'
import './Work.css'
import work from '../Photos/work.jpg'


class Work extends Component {
  render() {
    return (
      <div className='workheader col-lg-12 col-sm-12 bg-black'>
          <img src={work} className='workimg'/>
          <div className='textcontent text-center '>
           <h3 className='text-light my-3 fw-bolder'>{this.props.heading}</h3>
           <h2 className='text-info fw-bolder'>{this.props.text1}</h2>
           <h2 className='text-danger text-danger fw-bolder'>{this.props.text2}</h2>
          </div>
      </div>
    )
  }

 
}

export default Work
