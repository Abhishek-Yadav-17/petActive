import React from "react";
import "./Profile.css";
import AcsNav from "../PetAccessories/AccessoriesHome/AcsNav";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <AcsNav />
      <div className="row pt-3">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>John Doe</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                  <p className="text-muted font-size-sm">
                    Bay Area, San Francisco, CA
                  </p>
                  <button className="btn btn-warning mx-1">Follow</button>
                  <button className="btn btn-outline-dark">Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">Kenneth Valdez</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">(239) 816-9029</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Mobile</h6>
                </div>
                <div className="col-sm-9 text-secondary">(320) 380-4539</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  Bay Area, San Francisco, CA
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <Link
                    className="btn btn-warning "
                    target="__blank"
                    to="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
