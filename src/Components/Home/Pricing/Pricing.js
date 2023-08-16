import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <hr
        style={{
          height: "3rem",
          backgroundColor: "black",
          margin: "0",
          borderRadius: "0 0 80% 80%",
        }}
      />

      <section id="pricing">
        <h2 className="pricing-line">
          Most affordable prices for our services...
        </h2>
        <div className="row">
          <div className="price-column col-lg-4 col-sm-6">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://www.insidedogsworld.com/wp-content/uploads/2016/03/Dog-Pictures.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h2 className="price-text">Dog Stay</h2>
                <p>Less then 1 Week: Rs 100/day</p>
                <p>1 week: Rs 500</p>
                <p>More then 1 Week: Rs 70/day</p>
                <div className="d-grid gap-2">
                  <a className="signup-btn" href="signup">
                    <button
                      type="button"
                      className="btn btn-lg p-button"
                    >
                      Signup <i className="fa-solid fa-user-plus"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="price-column col-lg-4 col-sm-6">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://3.bp.blogspot.com/-dui-f0hQUHE/U0Qs5dOcWII/AAAAAAAACpg/S1lb9AnsMU4/s1600/loveable-cat-wallpaper-free.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h2 className="price-text">Cat Stay</h2>
                <p>Less then 1 Week: Rs 150/day</p>
                <p>1 week: Rs 700</p>
                <p>More then 1 Week: Rs 110/day</p>
                <div className="d-grid gap-2">
                  <a className="signup-btn" href="signup">
                    <button
                      type="button"
                      className="btn btn-lg p-button"
                    >
                      Signup <i className="fa-solid fa-user-plus"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="price-column col-lg-4 col-sm-6">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://i.pinimg.com/originals/06/15/6f/06156f6767c093807b655287e2bb73f2.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h2 className="price-text">Other Pet Stay</h2>
                <p>Less then 1 Week: Rs 200/day</p>
                <p>1 week: Rs 800</p>
                <p>More then 1 Week: Rs 150/day</p>
                <div className="d-grid gap-2">
                  <a className="signup-btn" href="signup">
                    <button
                      type="button"
                      className="btn btn-lg p-button"
                    >
                      Signup <i className="fa-solid fa-user-plus"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
