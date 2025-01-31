import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Form from "../components/Form";
import { Container, Typography, Link, Box } from "@mui/material";
// import "./Contact.css";

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

        <Form />

      </Container>

      <Footer />
    </div>
  );
};

export default Contact;
