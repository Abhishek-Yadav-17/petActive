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
        {db.map((elem) => {
          if (elem.id%2===1) {
            return (
              <div className="row">
                <div className="col-xl-6">
                  <img src={elem.image} alt="" />
                </div>
                <div className="col-xl-6 desc">
                  <h2>{elem.title}</h2>
                  <p>{elem.desc}</p>
                  <button
                    className="btn"
                    style={{ width: "8rem", backgroundColor: "cyan" }}
                  >
                    Get in touch
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row">
                <div className="col-xl-6 desc">
                  <h2>{elem.title}</h2>
                  <p>{elem.desc}</p>
                  <button
                    className="btn"
                    style={{ width: "8rem", backgroundColor: "cyan" }}
                  >
                    Get in touch
                  </button>
                </div>

                <div className="col-xl-6">
                  <img src={elem.image} alt="" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Testamonial;
