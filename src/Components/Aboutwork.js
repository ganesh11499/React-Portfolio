import React from "react";
import { FaReact } from "react-icons/fa";
import './Aboutwork.css'

const Aboutwork = () => {
  return (
    <div className="aboutwork row mt-5">
        <h1 className="ms-4 text-danger">ABOUT ME</h1>
      <div className="aboutheader col-lg-9 col-sm-12">
        <p className="ms-4  my-4 text-info">
          I have just over a year of experience as a junior software engineer
          with First Technology. In my short time there, I've already
          contributed to over a dozen projects and assisted with managing one
          project for one of the firm's long-time clients. “Prior to this role,
          I completed a two-year internship with Mobile First, where I honed my
          mobile app development skills. Ideally, I would like to continue to
          specialize in mobile software engineering, an area where I know your
          firm excels.”
        </p>
      </div>
      <div className="col-lg-3 col-sm-12 text-center text-white">
       <FaReact size={200} style={{colo:"white"}} className="text-info"/>
      </div>
    </div>
  );
};

export default Aboutwork;
