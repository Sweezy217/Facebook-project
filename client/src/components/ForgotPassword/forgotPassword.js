import React, { useEffect, useState } from "react";
import "./forgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [check, setCheck] = useState();
  // console.log(check.firstName, "DATAAAA")
  const [ userUniqueId, setUserUniqueId] = useState("")
  const [ name, setName] = useState("")
  const [ surname, setSurname] = useState("")

  // const user = check.map((item) => {
  //     return (
  //       <p>
  //         {item.firstName}
  //       </p>
  //     )
  // })

  
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setUserUniqueId((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }))
  // }
  
  const handleForm = (e) => {
    
    e.preventDefault();
    
    // console.log(userUniqueId)


    // useEffect(() => {
      fetch("http://localhost:3001/users")
        .then((res) => res.json())
        .then((data) => {
          setCheck(data);
          let i=0;
          for(i in data){
            if(data[i].uniqueID == userUniqueId){
              console.log("Exists")
              setName(data[i].firstName)
              setSurname(data[i].surname)
            } else {
              console.log("doesnt exist")
            }
          }
        })
        .catch((err) => console.log(err));
    // }, []);


  }



  return (
    <>
      <div className="forgotpassNav">
        <a
          aria-label="Facebook"
          className="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1n2onr6 x87ps6o x1lku1pv x1rg5ohu x1a2a7pz"
          href="/"
          role="link"
          tabindex="0"
        >
          <svg
            className="x1lliihq x5skwsv"
            height="22"
            viewBox="100 100 900 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Facebook</title>
            <path d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.389 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z"></path>
          </svg>
        </a>

        <div>
          <p>{name}</p>
          <p>{surname}</p>
        </div>
      </div>

      <div className="forgotpassCont">
        <div className="forgotpassCont2">
          <h3 className="forgotpassTitle">Find Your Account</h3>
          <p className="forgotpassText">
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <form className="forgotpassForm" onSubmit={handleForm}>
            <input
              type="text"
              className="forgotpassInput"
              placeholder="Email address or mobile number"
              onChange={(e) =>
                setUserUniqueId(e.target.value)
              }
              required
             
            />
            <div className="formBtns">
              <Link to="/login" className="forgotpassCancel">
                Cancel
              </Link>
              <button type="submit" className="forgotpassSearch">
                Search
              </button>
            </div>
          </form>
          
          

{/* 
          {
              check.map((userr) => {
                return <div key={userr} value={userr}>{userr}</div>
              })
              } */}
      </div>
      </div>
    </>
  );
};

export default ForgotPassword;
