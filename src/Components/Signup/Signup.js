import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <section class="gradien">
        <div class="container py-5">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-center">
                        <img
                          src="images/PetActive.png"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 class="mt-1 mb-5 pb-1">
                          Create PetActive Account
                        </h4>
                      </div>

                      <form>
                        <p>Please Signup</p>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Phone number or email address"
                          />
                          <label class="form-label" for="form2Example11">
                            Email
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Customer name"
                          />
                          <label class="form-label" for="form2Example11">
                            Name
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                          <label class="form-label" for="form2Example11">
                            Date of Birth
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Aadhar/PAN"
                          />
                          <label class="form-label" for="form2Example11">
                            Id Type
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Unique number"
                          />
                          <label class="form-label" for="form2Example11">
                            Id number
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="M/F"
                          />
                          <label class="form-label" for="form2Example11">
                            Gender
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <textarea
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="Address"
                          />
                          <label class="form-label" for="form2Example11">
                            Address
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="text"
                            id="form2Example11"
                            class="form-control"
                            placeholder="URL"
                          />
                          <label class="form-label" for="form2Example11">
                            Image URL
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                          />
                          <label class="form-label" for="form2Example22">
                            Password
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            class="form-control"
                          />
                          <label class="form-label" for="form2Example22">
                            Confirm Password
                          </label>
                        </div>

                        <div class="text-center pt-1 mb-5 pb-1">
                          <button
                            class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 p-3 w-100"
                            type="button"
                          >
                            Signup
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 class="mb-4">We are more than just a company</h4>
                      <p class="small mb-0">
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
