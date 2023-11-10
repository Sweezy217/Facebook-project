import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import validator from "validator";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    surname: "",
    uniqueID: "",
    password: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleform = (e) => {
    e.preventDefault();
    console.log(userData);
    console.log(validator);



    axios
      .post("http://localhost:3001/registrations", userData)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const days = []
  for(let i = 1; i <= 31; i++){
    days.push(i)
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  const year = []
  const currentYear = new Date().getFullYear()
  for(let i = 1888; i <= currentYear; i++){
    year.push(i)
  }


  return (
    <>
      <div className="signupCont">
        <div className="logo">
          <img
            class="fb_logo _agiv img"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="Facebook"
            width="100%"
            height="100%"
          />
        </div>

        <div className="signupDiv">
          <h3 className="signupH1">Create a new account</h3>
          <p className="signupP">It's quick and easy.</p>

          <form className="signupForm" onSubmit={handleform}>
            <input
              type="text"
              className="signupInputs signupName"
              placeholder="First Name"
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
              required
            />
            <input
              type="text"
              className="signupInputs signupLastName"
              placeholder="Surname"
              onChange={(e) =>
                setUserData({ ...userData, surname: e.target.value })
              }
              required
            />
            <input
              type="text"
              className="signupInputs signupPass"
              placeholder="Mobile number or email address"
              onChange={(e) =>
                setUserData({ ...userData, uniqueID: e.target.value })
              }
            />
            <input
              type="password"
              className="signupInputs signupPin"
              placeholder="New password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              required
            />

            <p className="signupSubTitle signupSubTitle2">Date of birth</p>

            <select
              className="signupSelect"
              type="selector"
              onChange={(e) =>
                setUserData({ ...userData, dayOfBirth: e.target.value })
              }
              required
            >
              { days.map((day) => {
               return <option key={day} value={day}>{day}</option>
              })
                }
              
            </select>
            <select
              className="signupSelect signupSelect2"
              type="selector"
              onChange={(e) =>
                setUserData({ ...userData, monthOfBirth: e.target.value })
              }
              required
            >
              {
              months.map((mon) => {
                return <option key={mon} value={mon}>{mon}</option>
              })
              }
              
            </select>
            <select
              className="signupSelect signupSelect2"
              type="selector"
              onChange={(e) =>
                setUserData({ ...userData, yearOfBirth: e.target.value })
              }
              required
            >
             
             {  year.map((cyear) => {
                return <option key={cyear} value={cyear}>{cyear}</option>
              })
                }
            </select>

            <p className="signupSubTitle">Gender</p>

            <div className="signupRadioDiv">
              <div className="signupRadio">
                <label for="radio-1">Female</label>
                <input
                  type="radio"
                  id="radio-1"
                  name="radio"
                  value="Female"
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                  required
                />
              </div>

              <div className="signupRadio">
                <label for="radio-2">Male</label>
                <input
                  type="radio"
                  id="radio-2"
                  name="radio"
                  value="Male"
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                  required
                />
              </div>

              <div className="signupRadio">
                <label for="radio-3">Custom</label>
                <input
                  type="radio"
                  id="radio-3"
                  name="radio"
                  value="Custom"
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <p className="signupFooter">
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <a href="https://www.facebook.com/help/637205020878504">
                Learn more
              </a>
              .
            </p>

            <p className="signupFooter">
              By clicking Sign Up, you agree to our{" "}
              <a href="https://www.facebook.com/legal/terms/update">Terms</a>,{" "}
              <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">
                Cookies Policy
              </a>
              . You may receive SMS notifications from us and can opt out at any
              time.
            </p>

            <div className="signupButtonDiv">
              <button type="submit" className="signupButton">
                Sign Up
              </button>
            </div>
          </form>

          <Link className="loginLink" to="/login">
            <p>Already have an account?</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
