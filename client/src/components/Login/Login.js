import "./Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [requirements, setRequirements] = useState(false);
  const [comrequire, setComrequire] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName.includes(".com")) {
      if (!userName.includes("@")) {
        console.log(true);
        setRequirements(true);
      }
    } else {
      console.log("error");
      setComrequire(true);
    }
    // axios
    //   .post("http://localhost:8000/login", { userName, password })
    //   .then((result) => {
    //     if (result.data.auth) {
    //     console.log(result.data.auth)
    //     } else {
    //       console.log("false")
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>
            {requirements ? "Please ensure email has the '@' sign" : ""}
          </span>
          <span>{comrequire ? "Please ensure email includes '.com'" : ""}</span>
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
