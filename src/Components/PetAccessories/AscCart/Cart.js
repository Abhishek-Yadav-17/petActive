import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Loading from "../../LoadingPage/Loading";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState({});
  const [load, setLoad] = useState(false);
  const [item, setItem] = useState([]);
  const [l, setL] = useState(false);
  const selector = useSelector((state) => state);

  const fetchItemData = async () => {
    try {
      const c_id = cart.id;
      const res = await fetch(`/CartItems/${c_id}`);
      const json = await res.json();
      setItem(json);
      console.log(json);
      setL(true);
    } catch {}
  };

  const fetchCartData = async () => {
    const id = selector.user.value.email;
    try {
      const res = await fetch(`/carts/${id}`);
      const json = await res.json();
      setCart(json);
      setLoad(true);
      console.log(json);
    } catch {
      console.log("Error", Error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    if (load) fetchItemData();
  }, [cart.id]);

  const handleRemove = (id) => {
    fetch(`/CartItems/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("ID:" + id + " removed");
    window.location.reload();
  };

  return (
    <div
      className="cart"
      style={{
        backgroundColor: "#E2C799",
        borderTop: "1px solid brown",
        borderRadius: "5px",
      }}
    >
      {load ? (
        <section className="p-5">
          <h3
            className="h2"
            style={{ textAlign: "center", paddingTop: "2rem" }}
          >
            Shopping Cart{" "}
          </h3>
          <h4 style={{ textAlign: "center", paddingTop: "2rem" }}>
            Welcome {cart.cust_id.name}
          </h4>
          <div className="container h-100">
            <div className="col">
              <p>
                <span className="h4">({item.length} item in your cart)</span>
              </p>
              {l ? (
                item.map((elem) => (
                  <div key={elem.cartItem_id}>
                    <div className="card mb-4">
                      <div className="card-body">
                        <button
                          className="btn"
                          onClick={() => {
                            handleRemove(elem.cartItem_id);
                          }}
                        >
                          <i
                            style={{ color: "red" }}
                            className="fa-solid fa-trash"
                          ></i>
                        </button>
                        <div className="row align-items-center">
                          <div
                            className="col-md-2"
                            style={{ height: "7rem", width: "6rem" }}
                          >
                            <img
                              src={elem.acs.imgUrl}
                              className="img-fluid"
                              alt="Generic placeholder"
                            />
                          </div>
                          <div className="col-md-10">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">Name</th>
                                  <th scope="col">Product ID</th>
                                  <th scope="col">Color</th>
                                  <th scope="col">Quantity</th>
                                  <th scope="col">Price/item</th>
                                  <th scope="col">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{elem.acs.name}</td>
                                  <td>{elem.acs.id}</td>
                                  <td>{elem.acs.color}</td>
                                  <td>{elem.quantity}</td>
                                  <td>${elem.acs.price}</td>
                                  <td>${elem.acs.price * elem.quantity}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Loading />
              )}

              <div className="card mb-5">
                <div className="card-body p-4">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">
                        Order total:
                      </span>{" "}
                      <span className="lead fw-normal">${cart.amount}</span>
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
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Cart;
