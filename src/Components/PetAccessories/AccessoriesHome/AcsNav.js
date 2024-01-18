import React from "react";
import "./AscHome.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currLog } from "../../../Redux/Slices/LoginSlic";
import { currentUser } from "../../../Redux/Slices/UsersSlice";

const AcsNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("state");
    dispatch(currLog(false));
    dispatch(currentUser({}));
    alert("User logout.");
    navigate("/login");
  };

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
                  A pet shop or pet store is a essential services retailer which
                  sells animals and pet care resources to the public. A variety
                  of animal supplies and pet accessories are also sold in pet
                  shops. The products sold include: food, treats, toys, collars,
                  leashes, cat litter, cages and aquariums
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="px-2 text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-white btn">
                      Follow on Twitter
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-white btn">
                      Like on Instagram
                    </Link>
                  </li>
                  <li onClick={handleLogout} className="text-white btn">
                    <b>Logout</b>
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
              <Link to="/accessories" className="btn">
                <i
                  style={{ color: "white" }}
                  className="fa-solid fa-bag-shopping"
                ></i>
              </Link>
              <Link to="/accessories/cart" className="btn">
                <i
                  style={{ color: "white" }}
                  className="fa-solid fa-cart-plus"
                ></i>
              </Link>
              <Link to="/userprofile" className="btn">
                <i
                  style={{ color: "white" }}
                  className="fa-regular fa-user"
                ></i>
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
