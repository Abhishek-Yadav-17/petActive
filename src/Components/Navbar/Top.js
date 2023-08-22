import React, { useEffect, useState } from "react";
import "./Top.css";
import { Link } from "react-router-dom";

const Top = () => {
  const [show, handleShow] = useState(false);
  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className="top">
      <nav className={`nav ${show && "nav__black"} navb navbar navbar-expand-lg`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-body"
            id="navbarNavDropdown"
          >
            <a className="navbar-brand" href="/">
              <img className="logo" src="images/PetActive.png" alt="sd" />
            </a>
            <span className="nav-item">
              <a className="nav-link" href="/" style={{ color: "black" }}>
                About
              </a>
            </span>

            <span className="nav-item">
              <a
                className="nav-link"
                href="/accessories"
                style={{ color: "black" }}
              >
                Shop
              </a>
            </span>
            <span className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "black" }}
              >
                Services
              </a>
              <ul className="dropdown-menu ddm">
                <span>
                  <a className="dropdown-item" href="/">
                    Broading
                  </a>
                </span>
                <span>
                  <a className="dropdown-item" href="/">
                    Training
                  </a>
                </span>
                <span>
                  <a className="dropdown-item" href="/">
                    Health food
                  </a>
                </span>
                <span>
                  <a className="dropdown-item" href="/">
                    Dog Walker
                  </a>
                </span>
                <span>
                  <a className="dropdown-item" href="/">
                    Veterinary care
                  </a>
                </span>
                <span>
                  <a className="dropdown-item" href="/">
                    Activities
                  </a>
                </span>
                <span>
                  <a className="dropdown-item" href="/">
                    Puppy Programs
                  </a>
                </span>
              </ul>
            </span>
            <span className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/login"
                style={{ color: "black" }}
              >
                Login
              </Link>
            </span>
            <span className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/signup"
                style={{ color: "black" }}
              >
                Signup
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Top;
