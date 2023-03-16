import React from "react";
import { FaFacebook, FaGoogle, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="row bg-dark mt-5">
      <h2 className="text-center">FOOTER</h2>
      <div className="col-lg-6 col-sm-12 mt-4">
        <p>
          <FaHome size={20} className="text-white m-2" />{" "}
          <span className="address">
            NO:234 Eswaran Kovil Street, Chennai, TamilNadu
          </span>
        </p>
        <p>
          <FaPhone size={20} className="text-white m-2" />
          <span>9345395344</span>
        </p>
        <p>
          <FaMailBulk size={20} className="text-white m-2" />
          <span>ganeshramesh11499@gmail.com</span>
        </p>
        <p>
          <FaInstagram size={20} className="text-white m-2" />
          <span>Ganesh-11</span>
        </p>
      </div>
      <div className="col-lg-6 col-sm-12 mt-2">
        <h4 className="text-center ">WHO IAM</h4>
        <p className="text">
          Iam Ganesh I have well konwledge in HTML, CSS, Javascript, React and
          just started MangoDB. Iam searchimg for job last three months. Iam doing 3
          projects in React. Jio prepaid plans, API appending data in to table,
          Simple portfolio...
        </p>
        <div className="icons">
        <FaFacebook size={30} style={{color:'white'}}  className='m-2'/>
        <FaTwitter size={30} style={{color:'white'}} className='m-2'/>
        <FaLinkedin size={30} style={{color:'white'}} className='m-2'/>
        <FaGoogle size={30} style={{color:'white'}} className='m-2'/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
