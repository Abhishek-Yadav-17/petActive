import React, { useEffect, useState } from "react";
import "./ListAcs.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updtItem } from "../../../Redux/Slices/AcsSlice";
import Loading from "../../LoadingPage/Loading";

const ListAcs = () => {
  const [acs, setAcs] = useState([]);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const res = await fetch("/accessories");
      const json = await res.json();
      setAcs(json);
      setLoad(true);
      // console.log(json);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = (e) => {
    fetch(`/accessories/${e}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("ID:" + e + " removed");
    window.location.reload();
  };

  const handleUpdate = (elm) => {
    console.log("axf");
    console.log(elm);
    dispatch(updtItem(elm));
    navigate("/admin/editaccessory")
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }} className="d-flex flex-column">
        <Link to="/admin/addacs" className="btn btn-warning">
          Add Accessory+
        </Link>
        {load ? (
          acs.map((elm) => (
            <div className="container py-5" key={elm.id}>
              <div className="row justify-content-center w-100">
                <div className="col-md-12 col-xl-10">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                          <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img alt="..." src={elm.imgUrl} className="w-100" />
                            <Link href="/">
                              <div className="hover-overlay">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(253, 253, 253, 0.15)",
                                  }}
                                ></div>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <h5>{elm.name}</h5>
                          <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </div>
                            <span>145</span>
                          </div>
                          <div className="mt-1 mb-0 text-muted small">
                            <span>{elm.type}</span>
                            <span className="text-primary"> • </span>
                            <span>{elm.category}</span>
                            <span className="text-primary"> • </span>
                            <span>
                              {elm.color}
                              <br />
                            </span>
                          </div>
                          <div className="mb-2 text-muted small">
                            <span>{elm.md.name}</span>
                            <span className="text-primary"> • </span>
                            <span>{elm.md.country}</span>
                            <span className="text-primary"> • </span>
                            <span>
                              {elm.md.id}
                              <br />
                            </span>
                          </div>
                          <p className="text-truncate mb-4 mb-md-0">
                            {elm.descption}
                          </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">${elm.price}</h4>
                            <span className="text-danger">
                              <s>${elm.price}</s>
                            </span>
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <button
                              onClick={() => {
                                handleRemove(elm.id);
                              }}
                              className="btn btn-primary btn-sm"
                              type="button"
                            >
                              Remove
                            </button>
                            <span
                              className="btn btn-outline-primary btn-sm mt-2"
                              type="button"
                              onClick={() => {
                                handleUpdate(elm);
                              }}
                            >
                              Update
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
};

export default ListAcs;
