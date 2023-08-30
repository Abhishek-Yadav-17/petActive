import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  console.log(props);
  return (
    <div className="ad-login" style={{backgroundColor: "yellow"}}>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <Link to="/"><img
                          src="images/PetActive.png"
                          style={{ width: "185px" }}
                          alt="logo"
                        /></Link>
                        <h4 className="mt-1 mb-5 pb-1">
                          Welcome {props.name}
                        </h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label className="form-label" for="form2Example11">
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label className="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 p-3 w-100"
                            type="button"
                          >
                            Log in
                          </button>
                          <br />
                          <Link className="text-muted" to="/">
                            Forgot password?
                          </Link>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an user account?</p>
                          <Link to="/signup" type="button" className="btn btn-outline-danger">
                            Create new user
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
