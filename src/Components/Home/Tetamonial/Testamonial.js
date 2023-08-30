import React from "react";
import "./Testamonial.css";
import db from "../../../db.json";

const Testamonial = () => {
  return (
    <div className="testamonial">
      <hr
        style={{
          height: "3rem",
          backgroundColor: "black",
          margin: "0",
          borderRadius: "0 0 80% 80%",
        }}
      />
      <div className="elements">
        <h1>Our Services</h1>
        <div className="row container">
          {db.map((elem) => {
            return (
              <div className="elem-box col-lg-6" key={elem.id}>
                <div className="">
                  <img src={elem.image} alt="" />
                </div>
                <div className="desc">
                  <h2>{elem.title}</h2>
                  <p>{elem.desc}</p>
                  <button
                    className="btn"
                    style={{ width: "8rem", backgroundColor: "#C38154" }}
                  >
                    Get in touch
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testamonial;
