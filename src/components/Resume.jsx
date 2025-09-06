import React from "react";
import resumeImage from "../assets/resume.jpg";
import resumePdf from "../Documents/MohitShankar Bhosale_InternshalaResume (2).pdf";
import "./Resume.css";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <div className="Resume">
      <Navbar />
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
    </div>
  );
};

export default Resume;
