import React from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import skill from "../Photos/skills.jpg";
import "./skillswork.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Progress } from "reactstrap";

const Skillswork = () => {
  return (
    <div className="skillheader text-center mt-4 col-lg-12 col-sm-12 ">
      <h1 className="text-danger ">LOVE TO LEAREN</h1>
      <img src={skill} className="skillimg mt-5" />
      <div className="skillicons">
        <div className="d-flex flex-row bd-highlight mb-3">
          <FaHtml5
            className="py-1 me-4"
            size={50}
            style={{ color: "yellow" }}
          />
          <p>
            <Progress className="mt-3" value={69} style={{ width: "300px" }} />
            69%
          </p>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <FaCss3 className="py-1 me-4" size={50} style={{ color: "yellow" }} />
          <p>
            <Progress className="mt-3" value={55} style={{ width: "300px" }} />
            55%
          </p>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <FaJs className="py-1 me-4" size={50} style={{ color: "yellow" }} />
          <p>
            <Progress className="mt-3" value={50} style={{ width: "300px" }} />
            50%
          </p>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <FaReact
            className="py-1 me-4"
            size={50}
            style={{ color: "yellow" }}
          />
          <p>
            <Progress className="mt-3" value={50} style={{ width: "300px" }} />
            50%
          </p>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <FaBootstrap
            className="py-1 me-4"
            size={50}
            style={{ color: "yellow" }}
          />
          <p>
            <Progress className="mt-3" value={50} style={{ width: "300px" }} />
            50%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skillswork;
