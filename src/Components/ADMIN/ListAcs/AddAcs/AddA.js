import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../LoadingPage/Loading";

const AddA = () => {
  const [manu, setManu] = useState([]);
  const [allManu, setAllManu] = useState([]);
  const [load, setLoad] = useState(false);
  const [l, setL] = useState(false);

  const nameRef = useRef(null);
  const typeRef = useRef(null);
  const categoryRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(0);
  const stockRef = useRef(0);
  const descRef = useRef(null);
  const imgUrlRef = useRef(null);
  const mIdRef = useRef(null);
  const mNameRef = useRef(null);
  const mCounntryRef = useRef(null);
  const mImgUrlRef = useRef(null);
  const navigate = useNavigate();

  const handleAdd = () => {
    const d = {
      name: nameRef.current.value,
      type: typeRef.current.value,
      category: categoryRef.current.value,
      color: colorRef.current.value,
      price: priceRef.current.value,
      stock: stockRef.current.value,
      descption: descRef.current.value,
      imgUrl: imgUrlRef.current.value,
      md: {
        id: mIdRef.current.value,
        name: mNameRef.current.value,
        country: mCounntryRef.current.value,
        imgUrl: mImgUrlRef.current.value,
      },
    };

    console.log(d);

    fetch(`/accessories`, {
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
        console.error("Error:", error);
      });

    navigate("/admin/accessories");
  };

  const fetchAllData = async () => {
    try {
      const res = await fetch(`/Manufacturers`);
      const json = await res.json();
      setAllManu(json);
      setL(true);
      // console.log(json);
    } catch {
      console.error();
    }
  };

  const fetchData = async (id) => {
    try {
      const res = await fetch(`/Manufacturers/${id}`);
      const json = await res.json();
      setManu(json);
      setLoad(true);
      // console.log(json);
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      <div className="p-5 adda">
        <div className="dropdown mx-auto d-block p-5">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Choose appropriate Manufacturer ID
          </button>
          <ul className="dropdown-menu">
            {l ? (
              allManu.map((m) => (
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      fetchData(m.id);
                    }}
                  >
                    {m.id}
                  </button>
                </li>
              ))
            ) : (
              <Loading />
            )}
          </ul>
        </div>
        {load ? (
          <form className="p-5">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    name="name"
                    ref={nameRef}
                  />
                  <label className="form-label" htmlFor="form6Example1">
                    Name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    id="form6Example2"
                    className="form-control"
                    name="type"
                    ref={typeRef}
                  />
                  <label className="form-label" htmlFor="form6Example2">
                    Type
                  </label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="form6Example3"
                name="category"
                className="form-control"
                ref={categoryRef}
              />
              <label className="form-label" htmlFor="form6Example3">
                Category
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="form6Example4"
                className="form-control"
                name="imgUrl"
                ref={imgUrlRef}
              />
              <label className="form-label" htmlFor="form6Example4">
                Image URL
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="email"
                id="form6Example5"
                className="form-control"
                name="color"
                ref={colorRef}
              />
              <label className="form-label" htmlFor="form6Example5">
                Color
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="number"
                id="form6Example6"
                className="form-control"
                name="price"
                ref={priceRef}
              />
              <label className="form-label" htmlFor="form6Example6">
                Price
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="number"
                id="form6Example6"
                className="form-control"
                name="stock"
                ref={stockRef}
              />
              <label className="form-label" htmlFor="form6Example6">
                Stock
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="form6Example6"
                className="form-control"
                name="md.id"
                value={manu.id}
                ref={mIdRef}
              />
              <label className="form-label" htmlFor="form6Example6">
                Manufacturer ID
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="form6Example6"
                className="form-control"
                name="md.imgUrl"
                value={manu.imgUrl}
                ref={mImgUrlRef}
              />
              <label className="form-label" htmlFor="form6Example6">
                Manufacturer Image URL
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="form6Example6"
                className="form-control"
                name="md.name"
                value={manu.name}
                ref={mNameRef}
              />
              <label className="form-label" htmlFor="form6Example6">
                Manufacturer Name
              </label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="form6Example6"
                className="form-control"
                name="md.country"
                value={manu.country}
                ref={mCounntryRef}
              />
              <label className="form-label" htmlFor="form6Example6">
                Manufacturer country
              </label>
            </div>

            <div className="form-outline mb-4">
              <textarea
                className="form-control"
                id="form6Example7"
                rows="4"
                name="descption"
                ref={descRef}
              ></textarea>
              <label className="form-label" htmlFor="form6Example7">
                Description
              </label>
            </div>

            <button
              type="submit"
              onClick={() => {
                handleAdd();
              }}
              className="btn btn-primary btn-block mb-4"
            >
              Add
            </button>
          </form>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default AddA;
