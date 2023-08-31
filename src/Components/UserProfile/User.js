import React from "react";
import { Outlet } from "react-router";
import AcsNav from "../PetAccessories/AccessoriesHome/AcsNav";
import Footer from "../Footer/Footer";

const User = () => {
  return (
    <div>
      <AcsNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default User;
