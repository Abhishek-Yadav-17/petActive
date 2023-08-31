import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { currentUser } from "../../Redux/Slices/UsersSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [load, setLoad] = useState(false);

  const fetchData = async () => {
    const id = "abhi1232@gmail.com";
    try {
      const res = await fetch(`users/${id}`);
      const json = await res.json();
      console.log(json);
      setUser(json);
      setLoad(true);
    } catch {
      console.log("Error", Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const defaultImg = "https://bootdey.com/img/Content/avatar/avatar7.png";

  return (
    <div style={{ backgroundColor: "yellow", height:"100vh" }}>
      {load ? (
        <div className="row pt-3">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={user.imgUrl !== null ? user.imgUrl : defaultImg}
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{user.name}</h4>
                    <p className="text-secondary mb-1">{user.email}</p>
                    <p className="text-muted font-size-sm">{user.phone}</p>
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
                  <div className="col-sm-9 text-secondary">{user.name}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.phone}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.city}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <Link
                      className="btn btn-warning "
                      to="/userprofile/edit"
                      onClick={() => {
                        dispatch(load ? currentUser(user) : null);
                      }}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Profile;
