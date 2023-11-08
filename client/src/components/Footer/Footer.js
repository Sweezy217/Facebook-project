import React from "react";
import "./Footer.css";
import AddIcon from "@mui/icons-material/Add";

const Footer = () => {
  const handleLanguage = () => {
    console.log("working");
  };

  return (
    <footer>
      <div className="ul-container">
        <div className="ul-holder">
          <ul>
            <li>
              <a href="">English (UK)</a>
            </li>
            <li>
              <a href="">Afrikaans</a>
            </li>
            <li>
              <a href="">Français (France)</a>
            </li>
            <li>
              <a href="">Português (Portugal)</a>
            </li>
            <li>
              <a href="">Español</a>
            </li>
            <li>
              <a href="">Deutsch</a>
            </li>
            <li>
              <a href="">لعربية</a>
            </li>
            <li>
              <a href="">ภาษาไทย</a>
            </li>
            <li>
              <a href="">Italiano</a>
            </li>
            <li>
              <a href="">हिन्दी</a>
            </li>
            <li>
              <a href="">中文(简体)</a>
            </li>
            <button style={{ marginLeft: "7px" }} onClick={handleLanguage}>
              <AddIcon style={{ fontSize: "15px", fontWeight: "bold" }} />
            </button>
          </ul>

          <div className="border-line"></div>

          <ul className="links">
            <li>
              <a href="">Sign Up</a>
            </li>
            <li>
              <a href="">Log in</a>
            </li>
            <li>
              <a href="">Messenger</a>
            </li>
            <li>
              <a href="">Facebook Lite</a>
            </li>
            <li>
              <a href="">Video</a>
            </li>
            <li>
              <a href="">Places</a>
            </li>
            <li>
              <a href="">Games</a>
            </li>
            <li>
              <a href="">Marketplace</a>
            </li>
            <li>
              <a href="">Meta Pay</a>
            </li>
            <li>
              <a href="">Meta Store</a>
            </li>
            <li>
              <a href="">Meta Store</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Threads</a>
            </li>
            <li>
              <a href="">Fundraisers</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Voting Information Centre</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Privacy Centre</a>
            </li>
            <li>
              <a href="">Groups</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Create ad</a>
            </li>
            <li>
              <a href="">Create Page</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
            <li>
              <a href="">AdChoices</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Contact uploading and non-users</a>
            </li>
          </ul>
        </div>
        <span>Meta © 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
