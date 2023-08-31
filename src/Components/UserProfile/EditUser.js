import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const EditUser = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const select = useSelector((state) => state);
  //   console.log(select.user.value);

  useEffect(() => {
    setData(select.user.value);
    setLoad(true);
    // eslint-disable-next-line
  }, []);

  const handleUpdate = () => {
    fetch(`/users`, {
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

    navigate("/userprofile");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="p-5 m-5">
      {load ? (
        <form>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  name="email"
                  type="email"
                  id="form3Example1"
                  className="form-control"
                  value={data.email}
                  onChange={handleInputChange}
                />
                <label className="form-label" htmlFor="form3Example1">
                  Email
                </label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  name="pw"
                  type="password"
                  id="form3Example2"
                  className="form-control"
                  value={data.pw}
                  onChange={handleInputChange}
                />
                <label className="form-label" htmlFor="form3Example2">
                  Password
                </label>
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form3Example4"
              name="name"
              className="form-control"
              value={data.name}
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="form3Example4">
              Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              name="gender"
              className="form-control"
              value={data.gender}
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="form3Example3">
              Gender
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              className="form-control"
              name="dob"
              value={data.dob}
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="form3Example3">
              DOB(dd/mm/yyyy)
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              className="form-control"
              name="phone"
              value={data.phone}
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="form3Example3">
              Mobile no.
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="form3Example3"
              className="form-control"
              name="imgUrl"
              value={data.imgUrl}
              onChange={handleInputChange}
            />
            <label className="form-label" htmlFor="form3Example3">
              Profile photo(Image Url)
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
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default EditUser;
