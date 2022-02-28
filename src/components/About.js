import "./componentStyles.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>
        About <span style={{ color: "white" }}>Me</span>
      </h1>
      <p>
        I graduated from Whitman College in 2020 with a degree in molecular
        Biology, and started programming in Python while I was studying the
        ascomycotic diversity of the Western Larch tree in Washington state. I
        had not been exposed to any serious programming before that point,
        having only taken a Biostatistics course which went over the basics of
        R. I quickly became interested. At first, I tinkered around on a website
        called Rosalind that taught Python with the help of practical
        Bioinformatics problem sets. At the end of 2020, I decided that I wanted
        to start a career in software development, so I drew up an actionable,
        one year plan in order to gain the required qualifications and
        experience. While working full-time in a different industry, I completed
        Harvard’s CS50 course which taught me the basic fundamentals of
        computing in C, Python, Flask, and SQLite. After that, I worked through
        The Odin Project’s entire full-stack JavaScript curriculum, still
        working full-time. After dozens of projects and many hours spent reading
        documentation, I had become an experienced, primarily front-end
        JavaScript developer. I am now set on contributing to the success of a
        professional development team. Through my time spent teaching myself to
        code, I have learned discipline, curiosity, passion, and creativity. It
        has been a wonderful experience, and I am excited to continue learning
        every day in a professional environment. If you would like to get in
        touch, please e-mail me at
        <span id="emailHighlight"> rhodestrt@gmail.com</span>. You might also be
        interested in taking a look at my full array of skills, as well as some
        of the projects I have completed by scrolling down this page.
      </p>
    </div>
  );
};

export default About;
