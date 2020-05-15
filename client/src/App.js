import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stats from "./components/Stats";

function App() {
  document.title = "Onur Can Tasyurek";
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Projects />
        <Contact />
        <Stats />
      </div>
    </div>
  );
}

export default App;
