import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StickyContactBar from "./components/StickyContactBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
