import React from 'react'
import "./AscHome.css";
import db from "./fake.json";

const AscList = () => {
  return (
    <div>
      <div className="album py-10 pet-show">
          <div className="mx-4" style={{ paddingBottom: "2rem" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {db.map((elem) => (
                <div className="col" key={elem.id}>
                  <div className="card shadow-sm mx-2">
                    <img
                      src={elem.image}
                      alt="..."
                      style={{
                        height: "25rem",
                        padding: "2rem",
                        borderRadius: "10px",
                        borderBottom: "1px solid rgb(255, 182, 99)",
                      }}
                    />

                    <div className="card-body">
                      <h6 className="card-text">{elem.title}</h6>
                      <h5>Count: {elem.rating.count}</h5>
                      <h5>Rs.{elem.price}</h5>
                      <h5>Rating: {elem.rating.rate} </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <a href='/accessories/details'
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </a>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <i class="fa-regular fa-heart"></i>
                          </button>
                        </div>
                        <small className="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default AscList
