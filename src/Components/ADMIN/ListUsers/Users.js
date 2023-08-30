import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);

  const handleUser = async () => {
    try {
      const res = await fetch("/users");
      const json = await res.json();
      // console.log(json);
      setUser(json);
      setLoad(true);
    } catch {
      console.log("Error: ", Error);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  const defaultImg = "https://bootdey.com/img/Content/avatar/avatar7.png";


  const handleRemove = (e) => {
    fetch(`/users/${e}`, {
      method: "DELETE",headers: {
        'Content-Type': 'application/json',
      },
    });
    alert("ID:"+e + " removed");
    window.location.reload();
  };

  return (
    <div>
      <div className="container mt-3 mb-4">
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Candidate Name</th>
                      <th className="text-center">ID</th>
                      <th className="action text-center">Delete User</th>
                    </tr>
                  </thead>
                  {load ? (
                    user.map((usr) => (
                      <tbody key={usr.email}>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              <img
                                className="img-fluid"
                                src={usr.imgUrl !== null ? usr.imgUrl : defaultImg}
                                alt=""
                              />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <strong>Name: </strong>
                                    {usr.name}
                                  </h5>
                                </div>
                                <div className="candidate-list-option">
                                  <ul className="list-unstyled">
                                    <li>
                                      <strong>Gender: </strong>
                                      {usr.gender}
                                    </li>
                                    <li>
                                      <strong>DOB: </strong>
                                      {usr.dob}
                                    </li>
                                    <li>
                                      <strong>Phone No.: </strong>
                                      {usr.phone}
                                    </li>
                                    <li>
                                      <strong>City: </strong>
                                      {usr.city}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <span className="candidate-list-time order-1">
                              {usr.email}
                            </span>
                          </td>
                          <td>
                            <ul className="list-unstyled mb-0 d-flex justify-content-around">
                              <li className="">
                                <button
                                  className="text-danger btn"
                                  data-toggle="tooltip"
                                  title="delete"
                                  data-original-title="Delete"
                                  onClick={()=>{handleRemove(usr.email)}}
                                >
                                  <i className="far fa-trash-alt"></i>
                                </button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <h1>Loading...</h1>
                  )}
                </table>
                <div className="text-center mt-3 mt-sm-3">
                  <ul className="pagination justify-content-center mb-0">
                    <li className="page-item disabled">
                      {" "}
                      <span className="page-link">Prev</span>{" "}
                    </li>
                    <li className="page-item">
                      {" "}
                      <Link className="page-link" to="/">
                        Next
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
