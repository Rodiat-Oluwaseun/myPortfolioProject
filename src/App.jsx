import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavTabs from './assets/components/NavTabs';
import NavTabs from "./assets/components/NavTabs";
import Home from "./assets/components/Home";
import ProjectPage from "./assets/components/ProjectPage";
import Contact from "./assets/components/Contact";
import About from "./assets/components/About";
import Skill from "./assets/components/Skill";

function App() {
  return (
    <Router>
      <NavTabs />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="projectpage" element={<ProjectPage />} />

        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="skill" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
