import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
// import Pricecard from "../components/Pricecard";
import Wordcard from "../components/Wordcard";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="PROJECTS." text="Some of my most recent works" />
      <Wordcard />
      {/* <Pricecard /> */}
      <Footer />
    </div>
  );
};

export default Projects;
