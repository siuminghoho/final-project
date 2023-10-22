import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLandingPage.css";
import React, { FormEvent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch, IRootState } from "../store";

import Swal from "sweetalert2";

import { RegisterAPI } from "../API/registerAPI";
import { loginAsync } from "../authAsyncThunk";

export const AdminLandingPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const authState = useSelector((state: IRootState) => state.auth); // Accessing the auth slice of the state
  const { isAuthenticated, loading, error } = authState;

  // State hooks for form inputs
  const [staffNumber, setStaffNumber] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const result = useSelector((state: IRootState) => state.auth.isAuthenticated);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/admin/menu');
  //   }
  // }, [isAuthenticated, navigate]);

  // Function to handle form submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Prevent page reload

    console.log("isLogin", isLogin);
    if (isLogin) {
      // For login, make sure the necessary fields are present
      if (!username || !staffNumber || !password) {
        // alert("Please enter your staff number and password.");
        Swal.fire({
          icon: "error",
          title: "錯誤",
          text: "請同時輸入用戶名稱，員工編號和密碼",
        });

        return;
      }
      await dispatch(
        loginAsync({
          username: username,
          staffno: staffNumber,
          password: password,
        })
      );

      // let result = await loginAPI({staffno: staffNumber, password: password,username: username});

      if (result) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "登入成功",
        });
        console.log("going to navigate");
        setIsLogin(true);

        //once login success, redirect to admin menu page
        navigate("/admin/menu");
      }
    }
    // handleLogin(staffNumber, password);
    else {
      // For registration, make sure all the necessary fields are present
      if (!username || !staffNumber || !password) {
        // alert("Please enter your username, staff number, and password.");

        Swal.fire({
          icon: "error",
          title: "錯誤",
          text: "請同時輸入用戶名稱，員工編號和密碼",
        });

        return;
      }

      let result = await RegisterAPI({
        staffno: staffNumber,
        password: password,
        username: username,
      });

      if (result) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "註冊成功",
        });
        console.log("going to navigate");
        setIsLogin(true);
      }
    }
  };

  // Function to toggle between Login and Register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const cardClass = `card card-custom ${isLogin ? "blueClass" : "greenClass"}`;

  const buttonStyle = {
    backgroundColor: isLogin ? "#007bff" : "#07d136", // blue for login, green for register
    borderColor: isLogin ? "#007bff" : "#07d136", // Same as background, or transparent, based on your design
    color: "white", // text color
  };

  // The UI of the component
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={cardClass}>
              <div className="card-body p-5 text-center">
                <h2 className="fw-bold mb-2 text-uppercase">
                  {isLogin ? "登入" : "註冊"}
                </h2>

                <button
                  style={buttonStyle}
                  className="btn btn-primary btn-lg px-5 mb-3"
                  onClick={toggleForm}
                >
                  轉到 {isLogin ? "註冊" : "登入"}
                </button>

                <form onSubmit={handleSubmit}>
                  {/* Conditional rendering for the 'Username' field */}
                  {/* {!isLogin && ( */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeUsername"
                      className="form-control form-control-lg"
                      placeholder="用户名稱"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label
                      className="form-label"
                      htmlFor="typeUsername"
                    ></label>
                  </div>
                  {/* )} */}

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeStaffNumber"
                      className="form-control form-control-lg"
                      placeholder="員工編號"
                      value={staffNumber}
                      onChange={(e) => setStaffNumber(e.target.value)}
                    />
                    <label
                      className="form-label"
                      htmlFor="typeStaffNumber"
                    ></label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePassword"
                      className="form-control form-control-lg"
                      placeholder="密碼"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      className="form-label"
                      htmlFor="typePassword"
                    ></label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-light btn-lg px-5"
                  >
                    {isLogin ? "登入" : "註冊"}
                  </button>
                </form>

                {/* Error Messages */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
