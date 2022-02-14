import "./componentStyles.css";
import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiGithub } from "@mdi/js";

const Hello = () => {
  const selfDescribed = [
    "Software Developer",
    "Biologist",
    "Runner",
    "Sailor",
    "Thinker",
  ];
  const [typeWriterWord, setTypeWriterWord] = useState(selfDescribed[0]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTypeWriterWord(selfDescribed[count % selfDescribed.length]);
    setTimeout(() => {
      setCount(count + 1);
    }, 4000);
  });

  return (
    <div className="hello-container">
      <div className="hello-content">
        <div className="typewriter">
          <div>Hi, I'm a</div>
          <div>{typeWriterWord}</div>
        </div>
        <div>
          <button>About Me</button>
          <button>Projects</button>
        </div>
        <div className="handle-links">
          <div>
            <p>Github</p>
            <Icon path={mdiGithub} />
          </div>
          <div>
            <p>LinkedIn</p>
            <Icon path={mdiLinkedin} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hello;
