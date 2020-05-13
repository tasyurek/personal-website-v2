import React, { useState, useEffect } from "react";
import { ReactComponent as ProfilePhoto } from "../assets/profile.svg";

const Navbar = (props) => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    function handleScroll(event) {
      try {
        let scroll = this.scrollY;
        scroll += 2;
        let about = this.document.querySelector("#about");
        let projects = this.document.querySelector("#projects");

        if (scroll >= about.offsetTop && scroll < projects.offsetTop) {
          setActive("about");
        }
        if (scroll >= projects.offsetTop) {
          setActive("projects");
        }
      } catch (e) {
        console.log(e.message);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <ProfilePhoto className="header__photo left-content" />
      <div className=" right-content">
        <a
          className={active === "about" ? "active-link nav-link" : "nav-link"}
          href="#about"
        >
          About
        </a>
        <a
          className={
            active === "projects" ? "active-link nav-link" : "nav-link"
          }
          href="#projects"
        >
          Projects
        </a>
        <a
          className={active === "contact" ? "active-link nav-link" : "nav-link"}
          href="#contact"
        >
          Contact
        </a>
        <a className="nav-link" href="/cv">
          CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
