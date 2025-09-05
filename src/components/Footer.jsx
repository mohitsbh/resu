import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { FaPhone, FaHome, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="site-footer">
      <Grid container spacing={4} justifyContent="center">
        {/* Left Footer */}
        <Grid item xs={12} sm={6} textAlign="center">
          <Box className="footer-col">
            <Box className="footer-line">
              <FaHome className="footer-icon" />
              <Box sx={{ marginLeft: 1 }}>
                <Typography variant="body1">Thane, Maharashtra,</Typography>
                <Typography variant="body1">India.</Typography>
              </Box>
            </Box>

            <Box className="footer-line">
              <FaPhone className="footer-icon" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                +91 9833714188
              </Typography>
            </Box>

            <Box className="footer-line">
              <FaMailBulk className="footer-icon" />
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                msbhosale003@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Footer */}
        <Grid item xs={12} sm={6} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>About Me</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            This is me, Mohit Bhosale. I enjoy discussing new projects and design challenges.
          </Typography>
          <Box className="social-row">
            <IconButton href="https://www.facebook.com/mohit.bhosale.378/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-btn">
              <FaFacebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/bhosale_ms_01/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
              <FaInstagram />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/mohit-bhosale-912903284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
              <FaLinkedin />
            </IconButton>
            <IconButton href="https://github.com/mohitsbh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn">
              <FaGithub />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
