import "./componentStyles.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>
        About <span style={{ color: "white" }}>Me</span>
      </h1>
      <p>
        Formal college education in Biology, professional experience as a fine
        dining cook, and a self-taught programmer. In the beginning of 2021, I
        began learning to program with Harvard's Introductory to Computer
        Science course, CS50. While working through the material, I discovered
        that software development could be a fulfilling, creative, and
        entrepreneurial career. From command line Mario emulators in C to
        full-stack applications using Python and flask, CS50 taught me the basic
        fundamentals of Computer Science. I was hooked, so I decided to fully
        commit myself to the pursuit of software engineering competency through
        an independent, open source curriculum called The Odin Project. Its
        project-driven ethos led me to develop dozens of primarily front-end
        applications using HTML/CSS, JS, React, Node, MongoDB, and an array of
        tooling technologies. Now I am focusing on the beginning of my career in
        web development. If you are interested in hiring an experienced front
        end developer, take a look at some of my skills and projects featured on
        this portfolio, and please get in touch via e-mail at
        <span id="emailHighlight"> rhodestrt@gmail.com</span>.
      </p>
    </div>
  );
};

export default About;
