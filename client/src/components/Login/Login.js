import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [uniqueID, setUniqueID] = useState("");
  // const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [loggedIN, setLoggedIN] = useState(false);
  const [passwordRequire, setPasswordRequire] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/getUsers")
  //     .then((users) => setUsers(users.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(users)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIN(true);
    setPasswordRequire(false);
    // let array = [];
    // if (users.length > 0) {
    //   users.forEach((user) => {
    //     if (user.uniqueID !== uniqueID) {
    //       array.push(user.uniqueID);
    //     }
    //   });
    // }
    // console.log(array);

    axios
      .post("http://localhost:8000/login", { uniqueID, password })
      .then((result) => {
        setLoggedIN(false);
        if (result.data.auth) {
          console.log(result.data.account);
        } else {
          setPasswordRequire(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoggedIN(true);
      });
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
            onChange={(e) => setUniqueID(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{passwordRequire ? "Password is Incorrect" : ""}</span>

          <button>{loggedIN ? "Logging In" : "Log in"}</button>
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
