import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import "./Hero.css"; // Import the updated CSS file

const Hero = () => {
  return (
    <div className="hero">
      {/* Overlay */}
      <div className="mask"></div>

      {/* Content */}
      <div className="content">
        <Typography variant="h1" className="hero-title">
          Hi, I'm <span className="highlight">Mohit Bhosale</span> 👋
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          🚀 AI & Data Science Enthusiast | Software & Web Developer
        </Typography>
        <Typography className="hero-description">
          Passionate about building intelligent solutions, crafting seamless web
          experiences, and solving real-world problems through technology.
        </Typography>

        {/* Buttons */}
        <div className="buttons">
          <Link to="/projects" className="btn">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
