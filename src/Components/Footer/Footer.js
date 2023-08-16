import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="ftr">
      <div className="card text-bg-dark">
        <img
          src="https://lh3.googleusercontent.com/01cDIj0m5i7qWpBtIJevHJ8_aDEMW9LMlmsbJ91At3i3yb-6LNCwtPP34Y7BTZN0HrYaNZj7x4U9kHXJi2tCgp90PQ=w640-h400-e365-rj-sc0x00ffffff"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <a className="logo-footer" href="/">
            <img src="images/PetActive.png" alt="sd" />
          </a>
          <div className="row footer-links">
            <div className="col-lg-3"></div>
            <div className="col-lg-3 links">
              <a href="/">
                <h5>Information</h5>
              </a>
              <a href="/">
                <h5>Help</h5>
              </a>
              <a href="/">
                <h5>Search</h5>
              </a>
              <a href="/">
                <h5>Terms Of Service</h5>
              </a>
              <a href="/">
                <h5>Information</h5>
              </a>
              <a href="/">
                <h5>Privacy Policy</h5>
              </a>
              <a href="/">
                <h5>Shipping Details</h5>
              </a>
            </div>
            <div className="col-lg-3 links">
              <a href="/">
                <h5>Support</h5>
              </a>
              <a href="/">
                <h5>Contact us</h5>
              </a>
              <a href="/">
                <h5>Careers</h5>
              </a>
              <a href="/">
                <h5>Refunds & Returns</h5>
              </a>
              <a href="/">
                <h5>Deliveries</h5>
              </a>
            </div>
            <div className="col-lg-3 links">
              <a href="/">
                <h5>Pet Shop</h5>
              </a>
              <a href="/">
                <h5>About us</h5>
              </a>
              <a href="/">
                <h5>Blog</h5>
              </a>
              <a href="/">
                <h5>Gift Cards</h5>
              </a>
              <a href="/">
                <h5>Information</h5>
              </a>
              <a href="/">
                <h5>Search Terms</h5>
              </a>
              <a href="/">
                <h5>Advanced Search</h5>
              </a>
              <a href="/">
                <h5>Help & Faq's</h5>
              </a>
              <a href="/">
                <h5>Store Location</h5>
              </a>
              <a href="/">
                <h5>Orders & Returns</h5>
              </a>
            </div>
          </div>
          <hr style={{ color: "yellow" }} />
          <h5 className="container">All Rights Reserved 2023.</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
