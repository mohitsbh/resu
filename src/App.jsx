import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Resume from "./components/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Resume" element={<Resume />} />


    </Routes>
  );
}

export default App;
