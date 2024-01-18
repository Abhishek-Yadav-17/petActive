import React, { useEffect } from "react";
import "./AscHome.css";
import Footer from "../../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import AcsNav from "./AcsNav";
import { useSelector } from "react-redux";
import Loading from "../../LoadingPage/Loading";

const AscHome = () => {
  const select = useSelector((state) => state);
  console.log(select);
  const navigate = useNavigate();

  useEffect(() => {
    if (!select.login.value.bool) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="ascHome">
      <AcsNav />
      <main style={{ backgroundColor: "yellow" }}>
        {select.login.value.bool ? <Outlet /> : <Loading />}
      </main>
      <Footer />
    </div>
  );
};

export default AscHome;