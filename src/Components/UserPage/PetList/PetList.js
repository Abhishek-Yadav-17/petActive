import React from 'react'
import { Link } from 'react-router-dom'

const PetList = () => {
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
                      <th className="text-center">Status</th>
                      <th className="action text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="candidates-list">
                      <td className="title">
                        <div className="thumb">
                          <img
                            className="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt=""
                          />
                        </div>
                        <div className="candidate-list-details">
                          <div className="candidate-list-info">
                            <div className="candidate-list-title">
                              <h5 className="mb-0">
                                <Link to="/">Brooke Kelly</Link>
                              </h5>
                            </div>
                            <div className="candidate-list-option">
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fas fa-filter pr-1"></i>
                                  Information Technology
                                </li>
                                <li>
                                  <i className="fas fa-map-marker-alt pr-1"></i>
                                  Rolling Meadows, IL 60008
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="candidate-list-favourite-time text-center">
                        <Link
                          className="candidate-list-favourite order-2 text-danger"
                          to="/"
                        >
                          <i className="fas fa-heart"></i>
                        </Link>
                        <span className="candidate-list-time order-1">
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <ul className="list-unstyled mb-0 d-flex justify-content-end">
                          <li>
                            <Link
                              to="/"
                              className="text-primary"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="view"
                            >
                              <i className="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="text-info"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Edit"
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="text-danger"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Delete"
                            >
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
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
  )
}

export default PetList
