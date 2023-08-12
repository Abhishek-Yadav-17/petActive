import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-time">
      <hr
        style={{
          height: "3rem",
          backgroundColor: "black",
          margin: "0",
          borderRadius: "0 0 80% 80%",
        }}
      />
      <div className="row">
        <div className="col-xl-3 timing">
          <h1 className="clock"><i class="fa-regular fa-clock"></i></h1>
          <h5>Opening Hours Come Visit</h5> 
            <h6>Mon: 10:30am - 7:00pm</h6> 
            <h6>Tue: 10:30am - 7:00pm</h6>
            <h6>Thu: 10:30am - 7:00pm</h6> 
            <h6>Fri: 10:30am - 7:00pm</h6> 
            <h6>Sat: 10:30am - 7:00pm</h6>
            <h6>Sun: 10:30am - 7:00pm</h6>
            
        </div>
        <div className="col-xl-9">
          <section id="features" class="features">
            <h2>We provide...</h2>
            <h2>Treatment, Love & Care</h2>
            <div class="row animals">
              <div class="col-lg-3 f-col">
                <img src="https://i.pinimg.com/originals/fa/83/29/fa83291deaa29bffd19130513c773b33.jpg" alt="" />
                <h5>Pet friendly Environment</h5>
              </div>
              <div class="col-lg-3 f-col">
                <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article5976.jpg" alt="" />
                <h5>Healthy food for pets</h5>
              </div>
              <div class="col-lg-3 f-col">
                <img src="https://www.thesprucepets.com/thmb/chCNKNnq0dyFpNUn_O8SIJPUf2I=/5640x3355/filters:fill(auto,1)/cats-playing-in-living-room-845697720-3ca4c7c053154ed5b17a0cc9ddd2cbd1.jpg" alt="" />
                <h5>Large playing area</h5>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;
