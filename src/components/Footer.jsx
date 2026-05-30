import { Grid, Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FaPhone, FaHome, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaRobot, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box className="site-footer" sx={{ borderTop: '1px solid var(--border)',padding: 4, marginTop: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} textAlign="center">
          <Box className="footer-col">
            <Box className="footer-line">
              <IconButton component={Link} to="/contact" aria-label="Contact" className="footer-icon-btn">
                <FaHome className="footer-icon" />
              </IconButton>
              <Box sx={{ marginLeft: 1 }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Thane%2C+Maharashtra%2C+India"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Typography variant="body2">Thane, Maharashtra, India</Typography>
                </a>
              </Box>
            </Box>
            <Box className="footer-line">
              <IconButton component="a" href="tel:+919833714188" aria-label="Call" className="footer-icon-btn">
                <FaPhone className="footer-icon" />
              </IconButton>
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                <a href="tel:+919833714188">+91 9833714188</a>
              </Typography>
            </Box>
            <Box className="footer-line">
              <IconButton
                component="a"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=msbhosale003@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open Gmail"
                className="footer-icon-btn"
              >
                <FaMailBulk className="footer-icon" />
              </IconButton>
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                <a href="mailto:msbhosale003@gmail.com">msbhosale003@gmail.com</a>
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} textAlign="center" >
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
            <IconButton href="https://www.linkedin.com/in/mohit-shankar-bhosale-912903284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
              <FaLinkedin />
            </IconButton>
            <IconButton href="https://github.com/mohitsbh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn">
              <FaGithub />
            </IconButton>
            <IconButton href="https://huggingface.co/msbhosale003" target="_blank" rel="noopener noreferrer" aria-label="HuggingFace" className="social-btn">
              <FaRobot />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box className="footer-bottom" sx={{ marginTop: 1, paddingTop: 3, textAlign: 'center' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Mohit Bhosale — Crafted with care.
        </Typography>
        <IconButton
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="scroll-top-btn"
          sx={{ mt: 1 }}
        >
          <FaArrowUp />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
