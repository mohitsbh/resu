import React from "react";
import resumeImage from "../assets/resume.jpg";
import resumePdf from "../Documents/mohit_resume.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume">
      <h1>My Resume</h1>

      {/* Image Resume */}
      <img src={resumeImage} alt="Resume" className="resume-image" />

      {/* PDF Resume (Optional) */}
      <div className="resume-pdf">
        <h2>Or view my resume in PDF format:</h2>
        <div className="pdf-controls">
          <a className="btn" href={resumePdf} target="_blank" rel="noopener noreferrer">Open PDF</a>
          <a className="btn btn-light" href={resumePdf} download>Download PDF</a>
        </div>
        <object
          data={resumePdf}
          type="application/pdf"
          width="100%"
          height="600px"
          aria-label="Resume PDF"
        >
          <p>Your browser does not support PDFs. Please download the resume to view it: 
            <a href={resumePdf} download>Download Resume</a>
          </p>
        </object>
      </div>

      {/* Certificates & Internships */}
      <div className="resume-certs">
        <h2>Certificates & Internships</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <h3>Data Science Bootcamp</h3>
            <p className="issuer">ABC Academy • 2024</p>
            <a className="cert-link" href="#" target="_blank" rel="noreferrer">View Certificate</a>
          </div>

          <div className="cert-card">
            <h3>Frontend Developer Internship</h3>
            <p className="issuer">Company XYZ • Jun 2023 - Aug 2023</p>
            <a className="cert-link" href="#" target="_blank" rel="noreferrer">View Details</a>
          </div>

          {/* add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
