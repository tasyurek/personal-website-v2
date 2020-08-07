import React, { useState, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../../assets/chevron-left-solid.svg";

const Navbar = () => {
  const [active, setActive] = useState("biography");

  useEffect(() => {
    function handleScroll(event) {
      try {
        var scroll = this.scrollY;

        let biography = this.document.querySelector("#biography");
        let personalInfo = this.document.querySelector("#personal-info");
        let experiances = this.document.querySelector("#experiances");
        let projects = this.document.querySelector("#projects");
        let education = this.document.querySelector("#education");
        let skills = this.document.querySelector("#skills");

        scroll += 2;
        if (scroll >= biography.offsetTop && scroll < personalInfo.offsetTop) {
          setActive("biography");
        } else if (
          scroll >= personalInfo.offsetTop &&
          scroll < experiances.offsetTop
        ) {
          setActive("personal-info");
        } else if (
          scroll >= experiances.offsetTop &&
          scroll < projects.offsetTop
        ) {
          setActive("experiances");
        } else if (
          scroll >= projects.offsetTop &&
          scroll < education.offsetTop
        ) {
          setActive("projects");
        } else if (scroll >= education.offsetTop && scroll < skills.offsetTop) {
          setActive("education");
        } else if (scroll >= skills.offsetTop) {
          setActive("skills");
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
    <div className="cv-navbar">
      <a href="/" className="nav-link">
        <LeftArrow className="icon" />
      </a>
      <div className="navs">
        <a
          href="#biography"
          className={
            active === "biography" ? "active-link nav-link" : "nav-link"
          }
        >
          Biography
        </a>
        <a
          href="#personal-info"
          className={
            active === "personal-info" ? "active-link nav-link" : "nav-link"
          }
        >
          Personal Info
        </a>
        <a
          href="#experiances"
          className={
            active === "experiances" ? "active-link nav-link" : "nav-link"
          }
        >
          Experiences
        </a>
        <a
          href="#projects"
          className={
            active === "projects" ? "active-link nav-link" : "nav-link"
          }
        >
          Projects
        </a>
        <a
          href="#education"
          className={
            active === "education" ? "active-link nav-link" : "nav-link"
          }
        >
          Education
        </a>
        <a
          href="#skills"
          className={active === "skills" ? "active-link nav-link" : "nav-link"}
        >
          Skills
        </a>
        <a
          href="#certificates"
          className={
            active === "certificates" ? "active-link nav-link" : "nav-link"
          }
        >
          Certificates
        </a>
      </div>
    </div>
  );
};

export default Navbar;
