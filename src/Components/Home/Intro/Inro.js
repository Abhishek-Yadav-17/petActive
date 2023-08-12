import React from "react";
import "./Intro.css";

const Inro = () => {
  return (
    <div className="Intro">
      <div className="row">
        <div class="col-xl-4 t-left">
          <a href="/" class="navbar-brand petactive">
            <i class="fa-solid fa-paw brand-icon"> </i> PetActive
          </a>
          <br />
          <nav class="navbar navbar-expand-lg navbar-dark navbar-home">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav nav flex-column">
                <li class="nav-item active">
                  <a class="nav-link" href="#features">
                    Features{" "}
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href="#testimonial">
                    Testamonials{" "}
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href="#pricing">
                    Pricing{" "}
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link" href="#contact-info">
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-xl-8 home-left">
          <h1>Welcome to PetActive!</h1>
          <h5>How We Provide TLC</h5>
          <p>
            Our hospital has various services designed to help animals heal as
            quickly as possible and keep them healthy into the future. Whether
            your pet has a dental issue or is suffering from obesity, we’ve got
            lots of treatment options available. We believe the key to your
            pet's long-term health is prevention. Make sure to bring your pet
            over to get their annual wellness blood profile as well as other
            important physical examinations we provide. Contact us to schedule
            an appointment today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inro;
