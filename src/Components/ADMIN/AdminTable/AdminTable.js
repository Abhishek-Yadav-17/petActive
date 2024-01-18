import React, { useEffect, useState } from "react";
import "./AdminTable.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../LoadingPage/Loading";

const AddAcs = () => {
  const [ad, setAd] = useState({});
  const [l, setL] = useState(false);
  const s = useSelector((d) => d);
  console.log(s.adminLogin.value.id);

  const fetchAdmin = async () => {
    try {
      const id = s.adminLogin.value.id;
      const res = await fetch(`/Admins/${id}`);
      const json = await res.json();
      setAd(json);
      setL(true);
      console.log(ad);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  const defaultImg = "./images/R.png";

  return (
    <div style={{ backgroundColor: "brown", height: "100vh" }}>
      <div className="row h-100">
        <div className="col-xl-3 d-flex" style={{ alignItems: "center" }}>
          {l ? (
            <div className="card w-100 p-2">
              <img
                src={ad.imgUrl === null ? defaultImg : ad.imgUrl}
                alt="..."
                style={{ objectFit:"contain", width: "100%", borderRadius:"10px", marginBottom:"1rem"}}
              />
              <p>
                <b>ID: </b>
                {ad.email}
              </p>
              <p>
                <b>Name: </b>
                {ad.name}
              </p>
              <p>
                <b>Phone: </b>
                {ad.phone}
              </p>
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div
          className="col-xl-3 d-flex"
          style={{ alignItems: "center", lineHeight: "4rem" }}
        >
          <ul>
            <h4 style={{color:"yellow"}}>Admin Work</h4>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/accessories"
              >
                List Accessories
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/users"
              >
                List Customers
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/doctors"
              >
                List Doctors
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/pets"
              >
                List Pet
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/admin/services"
              >
                List Pet Services
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-xl-6 d-flex" style={{ alignItems: "center" }}>
          <img
          className="card"
            src="./images/animal-images-baby-animals-cool-pictures-cute-animals-wallpaper-preview.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default AddAcs;
