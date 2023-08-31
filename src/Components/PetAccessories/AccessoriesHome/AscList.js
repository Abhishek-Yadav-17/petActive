import React, { useEffect, useState } from "react";
import "./AscHome.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../../Redux/Slices/CartSlice";

const AscList = () => {
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  const fetchdata = async () => {
    try {
      const res = await fetch("/accessories");
      const json = await res.json();
      setItem(json)
      setLoad(true);
      console.log(json);
    } catch {
      console.error();
    }
  };

  
  useEffect(() => {
    fetchdata();
  }, []);

  const handleAdd = (obj) =>{
    console.log(obj);
    dispatch(addItem(obj));
  }

  if (load) {
    return (
      <div>
        <div className="album py-10 pet-show">
          <div className="mx-4" style={{ paddingBottom: "2rem" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {item.map((elem) => (
                <div className="col" key={elem.id}>
                  <div className="card shadow-sm mx-2">
                    <img
                      src={elem.imgUrl}
                      alt="..."
                      style={{
                        height: "25rem",
                        padding: "2rem",
                        borderRadius: "10px",
                        borderBottom: "1px solid rgb(255, 182, 99)",
                      }}
                    />

                    <div className="card-body">
                      <h6 className="card-text">{elem.name}</h6>
                      <p>Brand: {elem.md.name}</p>
                      <p>Remaining.{elem.stock}</p>
                      <p>Rs.: {elem.price} </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link
                            to="/accessories/details"
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
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
                        <small className="btn btn-warning" onClick={()=>{handleAdd(elem)}} >Add to cart</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div className="container">
      <h1>Please wait...</h1>
    </div>;
  }
};

export default AscList;
