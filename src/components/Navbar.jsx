import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import Resume from "../assets/resume.jpg";
import Resume from "./Resume";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setcolor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Mohit.</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li className="resume">
          <Link to="/Resume">Resume</Link>
        </li>
      </ul>

      <div className="right-controls">
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        <div className="theme-wrap">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
