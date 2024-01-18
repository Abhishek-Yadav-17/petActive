import React, { useRef, createContext, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../Redux/Slices/UsersSlice";
import { currLog } from "../../Redux/Slices/LoginSlic";
import { currAdLog } from "../../Redux/Slices/AdminLoginSlice";

const Login = (props) => {
  const userRef = useRef(null);
  const pwref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector((s) => s);

  const handleLogin = async () => {
    if (props.name === "User") {
      const id = userRef.current.value;
      const res = await fetch(`/users/${id}`);
      const json = await res.json();
      if (json.pw === pwref.current.value) {
        dispatch(currentUser(json));
        dispatch(currLog({ bool: true }));
        alert("User login successfull.");
        navigate("/userprofile");
      } else {
        console.error("User Not Found");
      }
    } else if (props.name === "Admin") {
      const id = userRef.current.value;
      const res = await fetch(`/Admins/${id}`);
      const json = await res.json();
      if (json.pw === pwref.current.value) {
        dispatch(currentUser(json));
        dispatch(currAdLog({ bool: true, id: userRef.current.value }));
        alert("Admin login successfull.");
        navigate("/admin");
      } else {
        console.error("Admin Not Found");
        alert("Admin Not Found");
      }
    }
  };

  useEffect(() => {
    if (select.login.value.bool) navigate("/userProfile");
    else if(select.adminLogin.value.bool) navigate("/admin")
  }, []);

  return (
    <div className="ad-login" style={{ backgroundColor: "yellow" }}>
      <section>
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <Link to="/">
                          <img
                            src="images/PetActive.png"
                            style={{ width: "185px" }}
                            alt="logo"
                          />
                        </Link>
                        <h4 className="mt-1 mb-5 pb-1">Welcome {props.name}</h4>
                      </div>

                      <form>
                        <p>Please login to your account</p>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                            ref={userRef}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            ref={pwref}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 p-3 w-100"
                            type="button"
                            onClick={handleLogin}
                          >
                            Log in
                          </button>
                          <br />
                          <Link className="text-muted" to="/">
                            Forgot password?
                          </Link>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">
                            Don't have an user account?
                          </p>
                          <Link
                            to="/signup"
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new user
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
