import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <About />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
};

export default Home;
