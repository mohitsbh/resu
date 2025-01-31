import React from "react";
import resumeImage from "../assets/resume.jpg";
import resumePdf from "../documents/mohit_resume.pdf";
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
        <object
          data={resumePdf}
          type="application/pdf"
          width="100%"
          height="600px"
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
