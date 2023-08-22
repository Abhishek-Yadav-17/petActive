import React from "react";
import "./AscHome.css";

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
                    <a href="/" className="text-white">
                      Follow on Twitter
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white">
                      Email me
                    </a>
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
            <a href="/" className="navbar-brand d-flex align-items-center">
              <i className="fa-solid fa-dog mx-1"></i>
              <strong>PetActive</strong>
            </a>
            <div className="options">
              <a href="/accessories/cart" className="btn">
                <i
                  style={{ color: "white" }}
                  className="fa-solid fa-cart-plus"
                ></i>
              </a>
              <a href="/userprofile" className="btn">
                <i style={{ color: "white" }} class="fa-regular fa-user"></i>
              </a>
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
