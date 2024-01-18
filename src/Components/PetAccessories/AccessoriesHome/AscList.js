import React, { useEffect, useState } from "react";
import "./AscHome.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../Redux/Slices/ViewSlice";
import Loading from "../../LoadingPage/Loading";

const AscList = () => {
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const [c, setC] = useState([]);
  const [ld, setLd] = useState(false);
  const [cart, setCart] = useState({});
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const handleAcs = async (c) => {
    let cate = "/" + c;
    try {
      const res = await fetch("/accessories" + cate);
      const json = await res.json();
      setItem(json);
      setLoad(true);
    } catch {
      console.error();
    }
  };
  const fetchdata = async () => {
    try {
      const res = await fetch("/accessories");
      const json = await res.json();
      setItem(json);
      setLoad(true);
    } catch {
      console.error();
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await fetch("/accessories/categories");
      const json = await res.json();
      setC(json);
      setLd(true);
    } catch {
      console.error();
    }
  };

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

  useEffect(() => {
    fetchdata();
    fetchCartData();
    fetchCategory();
  }, []);

  const handleAdd = (obj) => {
    dispatch(addItem(obj));
  };


  const addCartItem = async (obj) => {
    const d = {
      date: "",
      quantity: 1,
      amount: obj.price,
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

  return (
    <div className="p-5">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="p-2 dropdown-menu">
          <li
            type="button"
            onClick={() => {
              fetchdata();
            }}
          >
            All Categories
          </li>
          {ld ? (
            c.map((elem) => (
              <li
              type="button"
                onClick={() => {
                  handleAcs(elem);
                }}
              >
                {elem}
              </li>
            ))
          ) : (
            <Loading />
          )}
        </ul>
      </div>
      <div className="album py-10 pet-show">
        <div className="mx-4" style={{ paddingBottom: "2rem" }}>
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">
            {load ? (
              item.map((elem) => (
                <div className="col" key={elem.id}>
                  <div className="card shadow-sm mx-2">
                    <img
                      src={elem.imgUrl}
                      alt="..."
                      style={{
                        height: "17rem",
                        padding: ".5rem",
                      }}
                    />

                    <div className="card-body">
                      <h6 className="card-text">{elem.name}</h6>
                      <p>
                        Brand: {elem.md.name}
                        <br />
                        Remaining.{elem.stock}
                        <br /> Rs.: {elem.price}{" "}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link
                            to="/accessories/details"
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => {
                              handleAdd(elem);
                            }}
                          >
                            View
                          </Link>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            <i className="fa-regular fa-heart"></i>
                          </button>
                        </div>
                        <small
                          onClick={() => {
                            addCartItem(elem);
                            alert("ID: "+elem.id + " added to cart...");
                          }}
                          className="btn btn-warning"
                        >
                          Add to cart
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AscList;
