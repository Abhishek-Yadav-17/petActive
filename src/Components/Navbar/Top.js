import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div className="top">
      <nav
        class="navbar navbar-expand-lg"
        style={{ backgroundColor: "#F0DE36" }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse nav-body" id="navbarNavDropdown">
            <span class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Login
              </a>
            </span>
            <span class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </span>

            <a class="navbar-brand" href="/">
              <img className="logo" src="images/PetActive.png" alt="sd" />
            </a>

            <span class="nav-item">
              <a class="nav-link" href="/">
                Shop
              </a>
            </span>
            <span class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu ddm">
                <span>
                  <a class="dropdown-item" href="/">
                    Broading
                  </a>
                </span>
                <span>
                  <a class="dropdown-item" href="/">
                    Training
                  </a>
                </span>
                <span>
                  <a class="dropdown-item" href="/">
                    Health food
                  </a>
                </span>
                <span>
                  <a class="dropdown-item" href="/">
                    Dog Walker
                  </a>
                </span>
                <span>
                  <a class="dropdown-item" href="/">
                  Veterinary care
                  </a>
                </span>
                <span>
                  <a class="dropdown-item" href="/">
                    Activities
                  </a>
                </span>
                <span>
                  <a class="dropdown-item" href="/">
                    Puppy Programs
                  </a>
                </span>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Top;
