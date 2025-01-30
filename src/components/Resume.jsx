import React, { Component } from "react";

import resume from "../assets/resume.jpg";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume">
      <img src={resume} alt="" />

      {/* <document src={pdf}/> */}
    </div>
  );
};

export default Resume;
