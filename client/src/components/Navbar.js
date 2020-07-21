import React, { useState, useEffect } from "react";
import { ReactComponent as ProfilePhoto } from "../assets/profile2.svg";

const Navbar = (props) => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    function handleScroll(event) {
      try {
        let scroll = this.scrollY;
        scroll += 2;
        const about = this.document.querySelector("#about");
        const projects = this.document.querySelector("#projects");
        const contact = this.document.querySelector("#contact");

        if (scroll >= about.offsetTop && scroll < projects.offsetTop) {
          setActive("about");
        } else if (scroll >= projects.offsetTop && scroll < contact.offsetTop) {
          setActive("projects");
        } else {
          setActive("contact");
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
