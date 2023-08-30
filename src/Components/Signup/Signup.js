import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <section className="gradien">
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
                          Create PetActive Account
                        </h4>
                      </div>

                      <form>
                        <p>Please Signup</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label className="form-label" for="form2Example11">
                            Email
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Customer name"
                          />
                          <label className="form-label" for="form2Example11">
                            Name
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                          <label className="form-label" for="form2Example11">
                            Date of Birth
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Aadhar/PAN"
                          />
                          <label className="form-label" for="form2Example11">
                            Id Type
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Unique number"
                          />
                          <label className="form-label" for="form2Example11">
                            Id number
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="M/F"
                          />
                          <label className="form-label" for="form2Example11">
                            Gender
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <textarea
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Address"
                          />
                          <label className="form-label" for="form2Example11">
                            Address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            className="form-control"
                            placeholder="URL"
                          />
                          <label className="form-label" for="form2Example11">
                            Image URL
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

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                          />
                          <label className="form-label" for="form2Example22">
                            Confirm Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 p-3 w-100"
                            type="button"
                          >
                            Signup
                          </button>
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

export default Signup;
