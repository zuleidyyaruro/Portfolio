import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";


const App = () => {
  return (
    <main className="text-white bg-black-200 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Education/>
    </main>
  );
};

export default App;
