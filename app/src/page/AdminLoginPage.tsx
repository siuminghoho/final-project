import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLoginPage.css";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegisterAPI } from "../API/registerAPI";
import {Login } from '../API/loginAPI';


export const AdminLoginPage = () => {

 
  // State hooks for form inputs
  const [staffNumber, setStaffNumber] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // State hook to toggle between Login and Register forms
  const [isLogin, setIsLogin] = useState(true);

  // React Query's QueryClient for query invalidation
  const queryClient = useQueryClient();

  // Mutation setup for registration
  const registerMutation = useMutation(RegisterAPI, {
    onSuccess: () => {
      // Invalidate queries if necessary, display success message, redirect user, etc.
      queryClient.invalidateQueries(["RegisterAPI"]);
      alert("Registration Successful! You may now log in.");
    },
    onError: () => {
      // Handle errors locally
      alert("An error occurred during registration.");
    },
  });

  // Mutation setup for login
  const loginMutation = useMutation(async (data:{staffno:string, password:string}) =>
  Login(data.staffno, data.password),
{
  onSuccess: ()=> queryClient.invalidateQueries(['login'])
}
)

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload

    // Validate inputs
    if (!staffNumber.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const userDetails = {
      staffno: staffNumber,
      password: password,
    };

    // Decide which API call to make based on the form currently displayed
    if (isLogin) {
      loginMutation.mutate(userDetails);
    } else {
      registerMutation.mutate({
        ...userDetails,
        username: staffNumber, // Assuming the username is the staff number during registration
      });
    }
  };

  // Function to toggle between Login and Register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // The UI of the component
  return (
    <section className="vh-100 gradient-custom">
      {/* Existing layout and form structure */}
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card card-custom">
              <div className="card-body p-5 text-center">
                <h2 className="fw-bold mb-2 text-uppercase">
                  {isLogin ? "Login" : "Register"}
                </h2>

                {/* Toggle between Login and Register */}
                <button
                  className="btn btn-primary btn-lg px-5 mb-3"
                  onClick={toggleForm}
                >
                  Switch to {isLogin ? "Register" : "Login"}
                </button>

                {/* Form for Login/Register */}
                <form onSubmit={handleSubmit}>
                  {/* ... form inputs ... */}

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        id="typeUsername"
                        className="form-control form-control-lg"
                        placeholder="Staff Number"
                        value={staffNumber}
                        onChange={(e) => setStaffNumber(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeUsername">
                        Staff Number
                      </label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePassword"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typePassword">
                        Password
                      </label>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-outline-light btn-lg px-5"
                      disabled={
                        registerMutation.isLoading || loginMutation.isLoading
                      }
                    >
                      {isLogin ? "Login" : "Register"}
                    </button>
                  </form>


                </form>

                {/* Error Messages */}
                {registerMutation.isError ? (
                  <p>Error during registration.</p>
                ) : null}
                {loginMutation.isError ? <p>Error during login.</p> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
