import React, { useEffect } from "react";
import "./AdHome.css";
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../LoadingPage/Loading";
import { currAdLog } from "../../../Redux/Slices/AdminLoginSlice";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const AdHome = () => {
  const l = useSelector((s) => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(l);
  useEffect(() => {
    if (!l.adminLogin.value.bool) {
      navigate("/adminLogin");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("state");
    dispatch(currAdLog(false));
    navigate("/adminLogin");
  };

  return (
    <div>
      <nav
        className="p-2"
        style={{ backgroundColor: "yellow", textAlign: "right" }}
      >
        <Link to="/admin" className="btn">
          <img
            src="./images/PetActive.png"
            alt="AdminHome"
            style={{ height: "3rem", objectFit: "contain" }}
          />
        </Link>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      {l.adminLogin.value.bool ? <Outlet /> : <Loading />}
      <Footer />
    </div>
  );
};

export default AdHome;
