import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Loading from "../../../LoadingPage/Loading";

const EditAcs = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({});

  const navigate = useNavigate();

  const select = useSelector((state) => state);
  console.log(select.acs);

  useEffect(() => {
    setData(select.acs.value);
    setLoad(true);
    // eslint-disable-next-line
  }, []);

  const handleUpdate = () => {
    fetch(`/accessories`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-5 edit-acs">
      {load ? (
        <form>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleInputChange}
                  id="form6Example1"
                  className="form-control"
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
                  name="type"
                  value={data.type}
                  onChange={handleInputChange}
                  id="form6Example1"
                  className="form-control"
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
              name="category"
              value={data.category}
              onChange={handleInputChange}
              id="form6Example1"
              className="form-control"
            />
            <label className="form-label" htmlFor="form6Example3">
              Category
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              name="color"
              value={data.color}
              onChange={handleInputChange}
              id="form6Example1"
              className="form-control"
            />
            <label className="form-label" htmlFor="form6Example4">
              Color
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              name="price"
              value={data.price}
              onChange={handleInputChange}
              id="form6Example1"
              className="form-control"
            />
            <label className="form-label" htmlFor="form6Example5">
              Price
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              name="stock"
              value={data.stock}
              onChange={handleInputChange}
              id="form6Example1"
              className="form-control"
            />
            <label className="form-label" htmlFor="form6Example6">
              Stock
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form6Example4"
              name="imgUrl"
              className="form-control"
              value={data.imgUrl}
              onChange={handleInputChange}
            />
            <label className="form-label" for="form6Example4">
              Image URL
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              name="data.md"
              value={data.md.id}
              onChange={handleInputChange}
              id="form6Example1"
              className="form-control"
            />
            <label className="form-label" htmlFor="form6Example6">
              Manufacturer ID
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form6Example7"
              rows="4"
              name="descption"
              value={data.descption}
              onChange={handleInputChange}
            ></textarea>
            <label className="form-label" htmlFor="form6Example7">
              Description
            </label>
          </div>

          <button
            type="submit"
            onClick={() => {
              handleUpdate();
            }}
            className="btn btn-primary btn-block mb-4"
          >
            Update
          </button>
        </form>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default EditAcs;
