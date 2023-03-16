import React from "react";
import "./Cards.css";
import api from "../Photos/api.jpg";
import jio from "../Photos/jioplans.webp";
import simple from "../Photos/simple.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  const data = [
    {
      Image: api,
      title: "Jio Prepaid Plans",
    },
    {
      Image: jio,
      title: "API appending data",
    },
    {
      Image: simple,
      title: "Simple portfolio",
    },
  ];
  return (
    <div>
      <h1 className="text-center mt-4 text-warning fw-bolder">PROJECT DETAILES</h1>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-lg-4 col-sm-12 bg-dark p-3 mt-4">
              <div className="card text" style={{ width: "18rem" }}>
                <img className="images card-img-top " src={item.Image} style={{width:"100%", height:"50vh"}} ></img>
              </div>
              <div className="card-body">
                <h1 className="text-center text-success fw-bold mt-2">{item.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
