import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  document.title = "Onur Can Tasyurek";
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
