import React, { useEffect, useRef, useState } from "react";
import "./AscDetails.css";
import { useSelector } from "react-redux";

const AscDetails = () => {
  const [cart, setCart] = useState({});
  const quanRef = useRef(0);
  const amountRef = useRef(0);
  const selector = useSelector((state) => state);
  const elem = selector.view.value;

  const fetchCartData = async () => {
    const id = selector.user.value.email;
    console.log(id);
    try {
      const res = await fetch(`/carts/${id}`);
      const json = await res.json();
      setCart(json);
      console.log(json);
    } catch {
      console.log("Error", Error);
    }
  };

  const addCart = async (obj) => {
    const d = {
      date: "",
      quantity: quanRef.current.value,
      amount: amountRef.current.value * quanRef.current.value,
      acs: obj,
      cd: cart,
    };
    console.log(d);
    await fetch(`/CartItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Resource updated successfully");
        } else {
          console.error("Failed to update resource");
        }
      })
      .catch((error) => {
        alert.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <img
                  alt="..."
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                  }}
                  className="rounded-4 fit"
                  src={elem.imgUrl}
                />
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h5 className="title text-dark">{elem.name}</h5>
                <h6>{elem.category}</h6>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>
                    {elem.stock + " "}
                    orders
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span ref={amountRef} className="h5">
                    ${elem.price}
                  </span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>{elem.descption}</p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">{elem.type}</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">{elem.color}</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">{elem.md.name}</dd>

                  <dt className="col-3">Origin</dt>
                  <dd className="col-9">{elem.md.country}</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>

                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                        onClick={() => {
                          if (quanRef.current.value > 1)
                            --quanRef.current.value;
                        }}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="number"
                        className="form-control text-center border border-secondary"
                        defaultValue={1}
                        ref={quanRef}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                        onClick={() => {
                          ++quanRef.current.value;
                        }}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a
                  href="/"
                  className="btn btn-warning shadow-0"
                  style={{ margin: "1rem" }}
                >
                  {" "}
                  Buy now{" "}
                </a>
                <span
                  onClick={() => {
                    addCart(elem);
                    alert("ID: "+elem.id + " added to cart...");
                  }}
                  className="btn btn-primary shadow-0"
                  style={{ margin: "1rem" }}
                >
                  {" "}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </span>
                <a
                  href="/"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                  style={{ margin: "1rem" }}
                >
                  {" "}
                  <i className="me-1 fa fa-heart fa-lg"></i> Save{" "}
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AscDetails;
