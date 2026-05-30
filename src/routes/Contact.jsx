import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Form from "../components/Form";
import { Container, Typography, Link, Box, Grid, Paper } from "@mui/material";
import { FaEnvelope, FaLinkedin, FaGithub, FaRobot, FaMapMarkerAlt } from "react-icons/fa";
import "../components/Contact.css";

const Contact = () => {
  const contactInfo = [
    { icon: <FaEnvelope />, label: "Email", value: "msbhosale003@gmail.com", href: "mailto:msbhosale003@gmail.com" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Mohit Bhosale", href: "https://www.linkedin.com/in/mohit-shankar-bhosale-912903284" },
    { icon: <FaGithub />, label: "GitHub", value: "mohitsbh", href: "https://github.com/mohitsbh" },
    { icon: <FaRobot />, label: "HuggingFace", value: "msbhosale003", href: "https://huggingface.co/msbhosale003" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Mumbai, India", href: null },
  ];

  return (
    <div className="contact-page">
      <div className="contact-bg-glow" />
      <Navbar />
      <Hero2 heading="CONTACT." text="Let's have a chat!" />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, position: "relative", zIndex: 1 }}>
        <Box className="contact-info-cards">
          <div className="contact-info-grid">
            {contactInfo.map((item, i) => (
              item.href ? (
                <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" underline="none" key={i}>
                  <Paper className="contact-info-card" elevation={0}>
                    <span className="contact-info-icon">{item.icon}</span>
                    <Typography variant="h6" className="contact-info-label">{item.label}</Typography>
                    <Typography variant="body2" className="contact-info-value">{item.value}</Typography>
                  </Paper>
                </Link>
              ) : (
                <Paper className="contact-info-card" elevation={0} key={i}>
                  <span className="contact-info-icon">{item.icon}</span>
                  <Typography variant="h6" className="contact-info-label">{item.label}</Typography>
                  <Typography variant="body2" className="contact-info-value">{item.value}</Typography>
                </Paper>
              )
            ))}
          </div>
        </Box>

        <Grid container spacing={4} alignItems="stretch" sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Box className="contact-section-box">
              <Typography variant="h5" className="contact-section-title">My Location</Typography>
              <Typography variant="body2" className="contact-section-desc">Find me here — interactive map.</Typography>
              <div className="map-wrap">
                <div className="map-responsive">
                  <iframe title="Mohit location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15021.123456789012!2d72.993!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzExLjAiTiA3MsKwNTknMDMuMCJF!5e0!3m2!1sen!2sin!4v0000000000000"
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="contact-section-box">
              <Typography variant="h5" className="contact-section-title">Send a Message</Typography>
              <Typography variant="body2" className="contact-section-desc">I'll get back to you as soon as possible.</Typography>
              <Form />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default Contact;
