import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaFileAlt } from "react-icons/fa";
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
    <>
  <div className={color ? "header header-bg" : "header"}>

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

      {/* Right-side vertical icon navbar (desktop on large screens, bottom bar on mobile) */}
      <nav className="side-nav" aria-label="Quick links">
        <Link to="/" title="Home" aria-label="Home">
          <FaHome />
        </Link>
        <Link to="/projects" title="Projects" aria-label="Projects">
          <FaProjectDiagram />
        </Link>
        <Link to="/about" title="About" aria-label="About">
          <FaUser />
        </Link>
        <Link to="/contact" title="Contact" aria-label="Contact">
          <FaEnvelope />
        </Link>
        <Link to="/Resume" title="Resume" aria-label="Resume">
          <FaFileAlt />
        </Link>
        <div className="side-toggle" title="Toggle theme" aria-hidden="true">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
