import "./componentStyles.css";
import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub } from "@mdi/js";

const Hello = () => {
  const selfDescribed = [
    "Software Developer.",
    "Biologist.",
    "Runner.",
    "Sailor.",
    "Thinker.",
  ];
  const typeWriter = (word, index) => {
    let elementSpace = document.querySelector("#typewriter");
    if (index < word.length) {
      index++;
      setTimeout(() => {
        elementSpace.textContent = word.substring(0, index);
        typeWriter(word, index);
      }, 100);
    } else if (index < word.length + word.length + 1) {
      if (index === word.length) {
        index++;
        setTimeout(() => {
          typeWriter(word, index);
        }, 5900 - word.length * 2 * 100);
      } else {
        index++;
        setTimeout(() => {
          elementSpace.textContent = word.substring(
            0,
            word.length - (index - word.length - 1)
          );
          typeWriter(word, index);
        }, 100);
      }
    }
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    typeWriter(selfDescribed[count % selfDescribed.length], 0);
    setTimeout(() => {
      setCount(count + 1);
    }, 6000);
  }, [count]);

  const handleLinkClick = (e) => {
    if (e.target.textContent === "About Me") {
      document
        .querySelector(".about-container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (e.target.textContent === "Projects") {
      document
        .querySelector(".projects-container")
        .scrollIntoView({ behavior: "smooth" });
    } else if (
      e.target.id === "githubLink" ||
      e.target.textContent === "Github"
    ) {
      window.open("https://github.com/rhodesrt");
    } else if (
      e.target.id === "linkedInLink" ||
      e.target.textContent === "LinkedIn"
    ) {
      window.open("https://linkedin.com/in/tristan-rhodes-a0a808228");
    }
  };

  return (
    <div className="hello-container">
      <div className="hello-content">
        <div className="typewriter">
          <div>Hi, I'm a</div>
          <div id="typewriter"></div>
        </div>
        <div>
          <button onClick={handleLinkClick}>About Me</button>
          <button onClick={handleLinkClick}>Projects</button>
        </div>
        <div className="handle-links">
          <div onClick={handleLinkClick} id="githubLink">
            <p onClick={handleLinkClick}>Github</p>
            <Icon path={mdiGithub} />
          </div>
          <div id="linkedInLink" onClick={handleLinkClick}>
            <p onClick={handleLinkClick}>LinkedIn</p>
            <Icon path={mdiLinkedin} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hello;
