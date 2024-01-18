import React from "react";
import { useNavigate } from "react-router-dom";

const Success = (props) => {
  const nav = useNavigate();

  return (
    <>
      <div className="screen__gradient" />
      <div className="d-flex justify-content-around">
        <div className="succ_gif">
          <img src="../images/succ.gif" alt="dogImage" />
          <h1>{props + " "}Successfull...</h1>
          <span
            onClick={() => {
              nav(-1);
            }}
            className="btn"
          >
            Click here
          </span>
        </div>
      </div>
    </>
  );
};

export default Success;
