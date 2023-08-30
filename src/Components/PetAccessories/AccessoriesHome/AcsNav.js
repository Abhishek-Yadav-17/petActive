import React from "react";
import "./AscHome.css";
import { Link } from "react-router-dom";

const AcsNav = () => {
  return (
    <div>
      <header>
        <div
          className="collapse"
          style={{ backgroundColor: "brown" }}
          id="navbarHeader"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text" style={{ color: "white" }}>
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-white">
                      Follow on Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-white">
                      Like on Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-white">
                      Email me
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar navbar-dark shadow-sm"
          style={{ backgroundColor: "brown" }}
        >
          <div className="container">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <i className="fa-solid fa-dog mx-1"></i>
              <strong>PetActive</strong>
            </Link>
            <div className="options">
              <Link to="/accessories/cart" className="btn">
                <i
                  style={{ color: "white" }}
                  className="fa-solid fa-cart-plus"
                ></i>
              </Link>
              <Link to="/userprofile" className="btn">
                <i style={{ color: "white" }} className="fa-regular fa-user"></i>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AcsNav;
