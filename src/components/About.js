import "./componentStyles.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>
        About <span style={{ color: "white" }}>Me</span>
      </h1>
      <p>
        I graduated from Whitman College in 2020 with my BS in Molecular
        Biology, and started programming in Python while I was studying the
        ascomycotic diversity of the Western Larch tree in Washington state. At
        first, I completed Python problem sets on Rosalind.info in order to
        practice programming and learn Bioinformatics. I then learned the
        fundamentals of Computer Science with Harvard’s CS50 course. In doing
        so, I built applications using C, Python/Flask, and SQLite. After that,
        I worked through The Odin Project’s entire full-stack JavaScript boot
        camp while working full-time as a chef. I am now set on contributing to
        the success of a professional development team. Through my time spent
        teaching myself to code, I have developed discipline, curiosity, and
        passion. It has been a wonderful experience, and I am excited to
        continue learning every day in a professional environment. If you would
        like to get in touch, please e-mail me at
        <span id="emailHighlight"> rhodestrt@gmail.com</span>. You might also be
        interested in taking a look at my full array of skills, as well as some
        of the projects I have completed by scrolling down this page.
      </p>
    </div>
  );
};

export default About;
