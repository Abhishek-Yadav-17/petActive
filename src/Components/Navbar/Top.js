import React, { useEffect, useState } from "react";
import "./Top.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currLog } from "../../Redux/Slices/LoginSlic";
import { currentUser } from "../../Redux/Slices/UsersSlice";

const Top = () => {
  const [show, handleShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const select = useSelector((s) => s);
  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  console.log(select);

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("state");
    dispatch(currLog(false));
    dispatch(currentUser({}));
    alert("User logout.");
    navigate("/");
  };

  return (
    <div className="top">
      <nav
        className={`nav ${show && "nav__black"} navb navbar navbar-expand-lg`}
      >
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
            <Link className="navbar-brand" to="/">
              <img className="logo" src="images/PetActive.png" alt="sd" />
            </Link>
            <span className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "black" }}>
                About
              </Link>
            </span>

            <span className="nav-item">
              <Link
                className="nav-link"
                to="/accessories"
                style={{ color: "black" }}
              >
                Shop
              </Link>
            </span>
            <span className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "black" }}
              >
                Services
              </Link>
              <ul className="dropdown-menu ddm">
                <span>
                  <Link className="dropdown-item" to="/">
                    Broading
                  </Link>
                </span>
                <span>
                  <Link className="dropdown-item" to="/">
                    Training
                  </Link>
                </span>
                <span>
                  <Link className="dropdown-item" to="/">
                    Health food
                  </Link>
                </span>
                <span>
                  <Link className="dropdown-item" to="/">
                    Dog Walker
                  </Link>
                </span>
                <span>
                  <Link className="dropdown-item" to="/">
                    Veterinary care
                  </Link>
                </span>
                <span>
                  <Link className="dropdown-item" to="/">
                    Activities
                  </Link>
                </span>
                <span>
                  <Link className="dropdown-item" to="/">
                    Puppy Programs
                  </Link>
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
                Pet Purchase/Adopt
              </Link>
            </span>
            {!select.login.value.bool ? (
              <span className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                  style={{ color: "black" }}
                >
                  Login/Signup
                </Link>
              </span>
            ) : (
              <div className="dropdown nav-item">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-user"></i>
                </button>
                <ul className="dropdown-menu ddm">
                  <li
                    type="button"
                    className="dropdown-item"
                    onClick={() => {
                      navigate("/userprofile");
                    }}
                  >
                    User Profile
                  </li>
                  <li
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Top;
