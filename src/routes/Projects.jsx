import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
// import Pricecard from "../components/Pricecard";
import ProjectsPanel from "../components/ProjectsPanel";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS." text="Some of my most recent works" />
  <ProjectsPanel />
      {/* <Pricecard /> */}
      <Footer />
    </div>
  );
};

export default Projects;
