import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Grid } from "@mui/material";

const Aboutcontent = () => {
  return (
    <Box sx={{ width: "100%", marginTop: "3rem", padding: "1rem",color:"white" }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} sm={6} textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: "bold" ,color:"white"}}>
            Who Am I?
          </Typography>
          <Typography variant="body1" sx={{ margin: "1rem 0", lineHeight: 1.6 ,color:'white'}}>
            I am a passionate Artificial Intelligence and Data Science student in my third year, 
            with a strong foundation in software development, web development, and frontend engineering. 
            Through internships at Bluebricks, Learnstriks, and Bluestock, I have gained hands-on experience 
            in crafting user-friendly web applications, designing efficient software solutions, and leveraging AI-driven insights.
          </Typography>
          <Typography variant="body1" sx={{ margin: "1rem 0", lineHeight: 1.6 ,color:'white'}}>
            I enjoy solving complex problems, designing intuitive interfaces, and continuously learning new technologies. 
            My goal is to create impactful digital experiences that blend innovation with functionality.
          </Typography>
          <Link to="/contact">
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Contact
            </Button>
          </Link>
        </Grid>

        {/* Right Section (optional images) */}
        {/* Uncomment this if you want to add images in the right section */}
        {/* <Grid item xs={12} sm={6}>
          <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
            <Box sx={{ gridColumn: "1 / span 8", zIndex: 6, paddingTop: "20%" }}>
              <img src="your-image-url-1.jpg" alt="Profile" style={{ maxWidth: "90%", borderRadius: "10px", border: "1px solid #333" }} />
            </Box>
            <Box sx={{ gridColumn: "4 / -1", zIndex: 5 }}>
              <img src="your-image-url-2.jpg" alt="Work" style={{ maxWidth: "90%", borderRadius: "10px", border: "1px solid #333" }} />
            </Box>
          </Box>
        </Grid> */}
        
      </Grid>
    </Box>
  );
};

export default Aboutcontent;
