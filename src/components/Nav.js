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
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
        <p onClick={toggleNav}>x</p>
      </nav>
    );
  }
};

const DesktopNav = () => {
  return (
    <div className="desktop-nav-container">
      <div>
        <p>TRISTAN</p>
        <p>RHODES</p>
      </div>
      <p>About</p>
      <p>Skills</p>
      <p>Projects</p>
      <p>Contact</p>
    </div>
  );
};
