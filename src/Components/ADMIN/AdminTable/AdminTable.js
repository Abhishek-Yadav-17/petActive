import React from "react";
import "./AdminTable.css";

const AddAcs = () => {
  return (
    <div>
      <section className="intro">
        <div className="bg-image h-100" style={{ backgroundColor: "#f5f7fa" }}>
          <div className="mask d-flex align-items-center">
            <div className="container">
              <div className="row w-100 justify-content-center">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body p-0">
                      <div
                        className="table-responsive table-scroll"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: "relative", height: "700px" }}
                      >
                        <table className="table table-striped mb-0">
                          <thead style={{ backgroundColor: "yellow" }}>
                            <tr>
                              <th scope="col">Accessories</th>
                              <th scope="col">Customers</th>
                              <th scope="col">Doctors</th>
                              <th scope="col">Pet</th>
                              <th scope="col">Pet Services</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><a className="btn" href="/admin/accessories">List Accessories</a></td>
                              <td><a className="btn" href="/admin/users">List Customers</a></td>
                              <td><a className="btn" href="/admin/doctors">List Doctors</a></td>
                              <td><a className="btn" href="/admin/pets">List Pet</a></td>
                              <td><a className="btn" href="/admin/services">List Pet Services</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default AddAcs;
