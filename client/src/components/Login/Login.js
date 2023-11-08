import "./Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
  };

  return (
    <div className="login-parent">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
        alt="Facebook"
        width="265"
        height="100px"
      />
      <div className="form-parent">
        <form onSubmit={handleSubmit} className="form">
          <h3>Log in to Facebook</h3>
          <input
            type="text"
            placeholder="Email address or phone number"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>Log in</button>
        </form>

        <Link className="forgot-account" to="/forgotpassword">
          Forgotten account?
        </Link>
        <div className="border">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <Link className="create-account" to="/signup">
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default Login;
