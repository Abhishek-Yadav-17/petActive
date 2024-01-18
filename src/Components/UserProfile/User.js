import React from "react";
import { Outlet } from "react-router";
import AcsNav from "../PetAccessories/AccessoriesHome/AcsNav";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import Login from "../Login/Login";

const User = () => {
  const select = useSelector((s) => s);
  console.log(select);

  return (
    <>
      {select.login.value.bool ? (
        <div>
          <AcsNav />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Login name="User" />
      )}
    </>
  );
};

export default User;
