import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Grid, List, ListItem, ListItemText } from "@mui/material";
import "./Aboutcontent.css";

const Aboutcontent = () => {
  return (
    <Box className="about" sx={{ width: "100%", marginTop: "3rem", padding: "1rem" }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} sm={6} textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Who Am I?
          </Typography>
          <Typography variant="body1" sx={{ margin: "1rem 0", lineHeight: 1.6 }}>
            I am a passionate Artificial Intelligence and Data Science student in my third year, 
            with a strong foundation in software development, web development, and frontend engineering. 
            Through internships at Bluebricks, Learnstriks, and Bluestock, I have gained hands-on experience 
            in crafting user-friendly web applications, designing efficient software solutions, and leveraging AI-driven insights.
          </Typography>
          <Typography variant="body1" sx={{ margin: "1rem 0", lineHeight: 1.6 }}>
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
      {/* Experience & Certificates */}
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>Experience</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Frontend Intern — Bluebricks" secondary="Built interactive UI components and improved performance." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Developer — Learnstriks" secondary="Worked on full-stack features and REST APIs." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Software Intern — Bluestock" secondary="Contributed to web app features and testing." />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>Certificates</Typography>
          <List>
            <ListItem>
              <ListItemText primary={<a href="#" target="_blank" rel="noreferrer">Machine Learning Bootcamp</a>} secondary="Issued by XYZ" />
            </ListItem>
            <ListItem>
              <ListItemText primary={<a href="#" target="_blank" rel="noreferrer">React Advanced</a>} secondary="Issued by ABC" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aboutcontent;
