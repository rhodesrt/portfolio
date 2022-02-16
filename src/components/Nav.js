import "./componentStyles.css";
import React, { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

// Mobile Nav component when screen under 500px
//  toggleable nav bar which displays vertically
// Desktop Nav component when screen above 500px
//  sticky, hover animations, navigates up or down page

const Nav = (props) => {
  if (props.windowSize.width <= 500) {
    return <MobileNav />;
  } else if (props.windowSize.width > 500) {
    return <DesktopNav />;
  }
};

export default Nav;

const MobileNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    if (navIsOpen) {
      setNavIsOpen(false);
    } else {
      setNavIsOpen(true);
    }
  };

  const handleLinkTouch = (e) => {
    if (e.target.textContent === "About") {
      document
        .querySelector(".about-container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.target.textContent === "Skills") {
      document
        .querySelector(".skills-layout")
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.target.textContent === "Projects") {
      document
        .querySelector(".projects-container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.target.textContent === "Contact") {
      document
        .querySelector(".projects-container")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!navIsOpen) {
    return (
      <div className="mobile-nav-container">
        <div>
          <p>TRISTAN</p>
          <p>RHODES</p>
        </div>
        <div id="nav-icon" onClick={toggleNav}>
          &#9776;
        </div>
      </div>
    );
  } else if (navIsOpen) {
    return (
      <nav className="mobile-nav-container column">
        <p onclick={handleLinkTouch}>About</p>
        <p onclick={handleLinkTouch}>Skills</p>
        <p onclick={handleLinkTouch}>Projects</p>
        <p onclick={handleLinkTouch}>Contact</p>
        <p onClick={toggleNav}>x</p>
      </nav>
    );
  }
};

const DesktopNav = () => {
  const handleLinkScroll = (e) => {
    if (e.target.textContent === "About") {
      document
        .querySelector(".about-container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.target.textContent === "Skills") {
      document
        .querySelector(".skills-layout")
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.target.textContent === "Projects") {
      document
        .querySelector(".projects-container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.target.textContent === "Contact") {
      document
        .querySelector(".projects-container")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="desktop-nav-container">
      <div>
        <p>TRISTAN</p>
        <p>RHODES</p>
      </div>
      <p onClick={handleLinkScroll}>About</p>
      <p onClick={handleLinkScroll}>Skills</p>
      <p onClick={handleLinkScroll}>Projects</p>
      <p onClick={handleLinkScroll}>Contact</p>
    </div>
  );
};
