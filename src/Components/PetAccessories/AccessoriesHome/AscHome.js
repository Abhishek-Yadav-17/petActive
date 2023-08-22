import React from "react";
import "./AscHome.css";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";
import AcsNav from "./AcsNav";

const AscHome = () => {
  return (
    <div className="ascHome">
      <AcsNav/>
      <main style={{ backgroundColor: "yellow" }}>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">PetActive e-Shop</h1>
              <p className="lead text-muted">
                A pet shop or pet store is a essential services retailer which
                sells animals and pet care resources to the public. A variety of
                animal supplies and pet accessories are also sold in pet shops.
                The products sold include: food, treats, toys, collars, leashes,
                cat litter, cages and aquariums
              </p>
              <p>
                <a
                  href="/"
                  className="btn btn-warning"
                  style={{ marginRight: "2rem" }}
                >
                  Donation
                </a>
                <a href="/" className="btn btn-outline-dark">
                  Helpline
                </a>
              </p>
            </div>
          </div>
        </section>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AscHome;
