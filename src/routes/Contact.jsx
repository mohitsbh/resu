import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Form from "../components/Form";
import { Container, Typography, Link, Box, Grid } from "@mui/material";
import "../components/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <Hero2 heading="CONTACT." text="Let’s have a chat!" />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph>
            I’d love to hear from you! Whether you have a project in mind, want to discuss AI and web development, or simply want to connect, feel free to reach out. Let’s collaborate and create something great together!
          </Typography>
          <Typography variant="body1">
            <strong>📧 Email:</strong>{" "}
            <Link href="mailto:msbhosale003@gmail.com">msbhosale003@gmail.com</Link>
          </Typography>
          <Typography variant="body1">
            <strong>🔗 LinkedIn:</strong>{" "}
            <Link href="https://www.linkedin.com/in/mohit-shankar-bhosale-912903284" target="_blank" rel="noopener noreferrer">
              Mohit Bhosale
            </Link>
          </Typography>
          <Typography variant="body1">
            <strong>🌐 GitHub:</strong>{" "}
            <Link href="https://github.com/mohitsbh" target="_blank" rel="noopener noreferrer">
              mohitsbh
            </Link>
          </Typography>
        </Box>

        {/* Responsive layout: map + form */}
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <div className="contact-intro">
              <Typography variant="h5" gutterBottom>My Location</Typography>
              <Typography variant="body2">Find me here — interactive map.</Typography>
            </div>
            <div className="map-wrap">
              <div className="map-responsive">
                <iframe title="Mohit location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15021.123456789012!2d72.993!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzExLjAiTiA3MsKwNTknMDMuMCJF!5e0!3m2!1sen!2sin!4v0000000000000"
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>

      </Container>

      <Footer />
    </div>
  );
};

export default Contact;
