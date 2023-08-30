import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../../../Redux/Slices/CartSlice";

const Cart = () => {
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const select = useSelector((state) => state);
  const dispatch = useDispatch();
  const userId = 2;
  console.log(select);

  const fetchdata = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
      const json = await res.json();
      setItem(json);
      setLoad(true);
      console.log(item[0].products);
    } catch {}
  };

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, []);

  const handleRemove = (obj) => {
    dispatch(removeItem(obj));
  };

  if (load) {
    return (
      <div className="cart p-2">
        <section
          className="p-5"
          style={{
            backgroundColor: "#FEFF86",
            borderTop: "1px solid brown",
            borderRadius: "5px",
          }}
        >
          <h3
            className="h2"
            style={{ textAlign: "center", paddingTop: "2rem" }}
          >
            Shopping Cart{" "}
          </h3>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col">
                <p>
                  <span className="h4">(1 item in your cart)</span>
                  {item.date}
                </p>
                {select.cart.map((elem) => (
                  <div key={elem.id} className="container">
                    <div className="card mb-4">
                      <div className="card-body p-4">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <img
                              src={elem.image}
                              className="img-fluid"
                              alt="Generic placeholder"
                            />
                          </div>
                          <div className="col-md-2 d-flex justify-content-center">
                            <div>
                              <p className="small text-muted mb-4 pb-2">Name</p>
                              <p className="lead fw-normal mb-0">
                                {elem.name}
                              </p>
                            </div>
                            <div>
                              <p className="small text-muted mb-4 pb-2">
                                Product ID
                              </p>
                              <p className="lead fw-normal mb-0">
                                {elem.price}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-2 d-flex justify-content-center">
                            <div>
                              <p className="small text-muted mb-4 pb-2">
                                Color
                              </p>
                              <p className="lead fw-normal mb-0">
                                <i
                                  className="fas fa-circle me-2"
                                  style={{ color: "brown" }}
                                ></i>
                                Brown
                              </p>
                            </div>
                          </div>
                          <div className="col-md-2 d-flex justify-content-center">
                            <div>
                              <p className="small text-muted mb-4 pb-2">
                                Quantity
                              </p>
                              <p className="lead fw-normal mb-0">
                                {elem.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-2 d-flex justify-content-center">
                            <div>
                              <p className="small text-muted mb-4 pb-2">
                                Price
                              </p>
                              <p className="lead fw-normal mb-0">$799</p>
                            </div>
                          </div>
                          <div className="col-md-2 d-flex justify-content-center">
                            <div>
                              <p className="small text-muted mb-4 pb-2">
                                Total
                              </p>
                              <p className="lead fw-normal mb-0">$799</p>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            handleRemove(elem);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="card mb-5">
                  <div className="card-body p-4">
                    <div className="float-end">
                      <p className="mb-0 me-5 d-flex align-items-center">
                        <span className="small text-muted me-2">
                          Order total:
                        </span>{" "}
                        <span className="lead fw-normal">$799</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <Link
                    to="/accessories"
                    type="button"
                    className="btn btn-outline-dark btn-lg me-2"
                  >
                    Continue shopping
                  </Link>
                  <button type="button" className="btn btn-warning btn-lg">
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    <div className="container">
      <h1>Please wait...</h1>
    </div>;
  }
};

export default Cart;
