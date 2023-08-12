import React from "react";
import "./Signup.css";
import Top from "../Navbar/Top";
import Footer from "../Footer/Footer";

const Signup = () => {
  return (
    <div className="signup">
      <Top />
      <section id="ownerID">
        <div class="row">
          <div class="col-lg-4 left-nav">
            <a href="/" class="navbar-brand petactive">
              <i class="fa-solid fa-paw brand-icon"> </i> PetActive
            </a>
            <br />

            <nav class="navbar navbar-expand-lg navbar-dark">
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
                    <a class="nav-link" href="signupPage.html">
                      Human profile
                    </a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="signupPage2.html">
                      Pet basic{" "}
                    </a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="signupPage3.html">
                      Pet details{" "}
                    </a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Confirmation{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="col-lg-8 signup-info">
            <section class="owner-info">
              <h2 class="profile-heading">Human Profile</h2>
              <form
                class="user-info container"
                action="/"
                method="post"
              >
                <div className="name">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Your name"
                  />
                </div>
                <div className="name">
                  <label>Email </label>
                  <input className="form-control" type="text" name="Email" />
                </div>
                <div className="name">
                  <label>Password </label>
                  <input className="form-control" type="password" name="pw" />
                </div>
                <div className="name">
                  <label>Confirm Password </label>
                  <input className="form-control" type="password" name="cpw" />
                </div>
                <div className="name">
                  <label>Contact No. </label>
                  <input
                    className="form-control"
                    type="text"
                    name="Contact No."
                  />
                </div>
                <div className="name">
                  <label>Address </label>
                  <input className="form-control" type="text" name="address" />
                </div>
                <div className="name">
                  <label>Gender</label>
                  <input className="form-control" type="text" name="Gender" />
                </div>
                <div className="name">
                  <label>Upload Your Photo </label>
                  <input
                    className="form-control"
                    type="file"
                    name="Photograph"
                  />
                </div>
                <input
                  type="submit"
                  value="submit"
                  className="btn"
                  style={{ backgroundColor: "#C38154", color: "white" }}
                />
              </form>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Signup;
