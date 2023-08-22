import React from "react";
import "./Intro.css";

const Inro = () => {
  return (
    <div className="Intro  pt-5">
      <div className="row">
        <div class="col-xl-5 t-left">
          <img src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Pty-Slider-4-Image.webp" alt="" />
        </div>
        <div className="col-xl-7 home-left">
          <h1>Welcome to <span style={{color: "brown"}}>PetActive!</span></h1>
          <h5>How We Provide TLC</h5>
          <p>
            Our hospital has various services designed to help animals heal as
            quickly as possible and keep them healthy into the future. Whether
            your pet has a dental issue or is suffering from obesity, we’ve got
            lots of treatment options available. We believe the key to your
            pet's long-term health is prevention. Make sure to bring your pet
            over to get their annual wellness blood profile as well as other
            important physical examinations we provide. Contact us to schedule
            an appointment today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inro;
