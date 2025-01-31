import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { FaPhone, FaHome, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", padding: "2rem 0", background: "linear-gradient(45deg, #1d1d1d, #343434)", color: "#fff" }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Left Footer */}
        <Grid item xs={12} sm={6} textAlign="center">
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaHome style={{ color: "#f39c12", fontSize: "1.5rem" }} />
              <Box sx={{ marginLeft: 1,color:'white' }}>
                <Typography variant="body1" sx={{color:'white'}}>Thane, Maharashtra,</Typography>
                <Typography variant="body1" sx={{color:'white'}}>India.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaPhone style={{ color: "#f39c12", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={{ marginLeft: 1 ,color:'white'}}>
                +91 9833714188
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FaMailBulk style={{ color: "#f39c12", fontSize: "1.5rem" }} />
              <Typography variant="body1" sx={{ marginLeft: 1,color:'white' }}>
                msbhosale003@gmail.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Footer */}
        <Grid item xs={12} sm={6} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: "bold" ,color:'white'}}>About Me</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 ,color:'white'}}>
            This is me, Mohit Bhosale. I enjoy discussing new projects and design challenges.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 2 }}>
            <IconButton 
              href="https://www.facebook.com/mohit.bhosale.378/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#f39c12",
                },
              }}
            >
              <FaFacebook size={30} />
            </IconButton>
            <IconButton 
              href="https://www.instagram.com/bhosale_ms_01/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#f39c12",
                },
              }}
            >
              <FaInstagram size={30} />
            </IconButton>
            <IconButton 
              href="https://www.linkedin.com/in/mohit-bhosale-912903284/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#f39c12",
                },
              }}
            >
              <FaLinkedin size={30} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
