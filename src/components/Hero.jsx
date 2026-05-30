import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import resumePdf from "../Documents/Mohit_resume (1).pdf";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      <div className="hero-bg-orb hero-bg-orb-3"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div className="hero-badge">AI & Full Stack Developer</div>

        <Typography variant="h1" className="hero-title">
          Hi, I'm{" "}
          <span className="hero-title-gradient">Mohit Bhosale</span>
        </Typography>

        <Typography className="hero-subtitle">
          Crafting intelligent digital experiences at the intersection of
          AI, data, and modern web technologies.
        </Typography>

        <Box className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">3+</span>
            <span className="hero-stat-label">Years Coding</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-number">30+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-number">5+</span>
            <span className="hero-stat-label">Tech Stacks</span>
          </div>
        </Box>

        <Box className="hero-actions">
          <Link to="/projects" className="hero-btn hero-btn-primary">
            View Projects <FaArrowRight className="hero-btn-icon" />
          </Link>
          <a href={resumePdf} download className="hero-btn hero-btn-secondary">
            <FaDownload className="hero-btn-icon" /> Resume
          </a>
        </Box>
      </div>
    </div>
  );
};

export default Hero;
