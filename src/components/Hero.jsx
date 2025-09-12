import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import "./Hero.css"; // Import the updated CSS file

const Hero = () => {
  return (
    <div className="hero">
      {/* Overlay */}
      <div className="mask"></div>

      {/* Content */}
      <div className="content">
        <Typography variant="h4" className="hero-title over-image">
          Hi, I'm <span className="highlight">Mohit Bhosale</span> 👋
        </Typography>
        <Typography variant="h5" className="hero-subtitle over-image">
          🚀 AI & Data Science Enthusiast | Software & Web Developer
        </Typography>
        <Typography className="hero-description">
          Passionate about building intelligent solutions, crafting seamless web
          experiences, and solving real-world problems through technology.
        </Typography>

        {/* Professional highlights */}
        <Box className="highlights-container">
          <div className="highlight-item">
            <span className="highlight-number">3+</span>
            <span className="highlight-text">Years of Coding Experience</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">30+</span>
            <span className="highlight-text">Projects Completed</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">5+</span>
            <span className="highlight-text">Technologies Mastered</span>
          </div>
        </Box>

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
