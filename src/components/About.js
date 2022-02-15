import "./componentStyles.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>
        About <span style={{ color: "white" }}>Me</span>
      </h1>
      <p>
        Formal college education in Biology, self-taught programmer. In the
        beginning of 2021, I began working on Harvard's Introductory to Computer
        Science course, CS50. While working through the material, I discovered
        that programming is fulfilling, creative, and entrepreneurial. From
        printf Mario games in C to full-stack applications using Python and
        flask, CS50 taught me the fundamentals of Computer Science. I was
        hooked, so I decided to spend another six months learning Javascript
        full-time using an open source curriculum called The Odin Project. Its
        project-driven ethos led me to develop primarily front-end software
        using HTML/CSS, JS, React, Node, and an array of tooling technologies.
      </p>
    </div>
  );
};

export default About;
