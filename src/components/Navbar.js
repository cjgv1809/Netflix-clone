import React, { useState, useEffect } from "react";
import "./Navbar.css";
import avatar from "../img/avatar.webp";
import { useHistory } from "react-router-dom";

function Navbar({ subscription }) {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  // hides navbar when page is scrolled down
  const NavbarOnScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // code will run only when component mounts, when we scroll we trigger NavbarOnScroll
  useEffect(() => {
    window.addEventListener("scroll", NavbarOnScroll);
    return () => {
      window.removeEventListener("scroll", NavbarOnScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        onClick={() => {
          // subscription ? history.push("/") : history.push("/profile");
          history.push("/");
        }}
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        onClick={() => history.push("/profile")}
        className="nav-avatar"
        src={avatar}
        alt="Avatar"
        title="Click to edit profile"
      />
    </div>
  );
}

export default Navbar;
