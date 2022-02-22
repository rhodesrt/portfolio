import "./componentStyles.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>
        About <span style={{ color: "white" }}>Me</span>
      </h1>
      <p>
        I graduated with my BS in Molecular Biology from Whitman College in
        2020. While writing my thesis, I was introduced to programming in Python
        in order to complete some BLAST sequencing analysis of various species
        of ascomycotic fungi. Before graduation, I was recruited to work as a
        sous chef in fine dining which had been a goal of mine for some time.
        Over two years working as a chef, I completed software development
        courses on the side hosted by organizations such as Harvard University
        and The Odin Project. While working through the material, I discovered
        that software development could be a fulfilling, creative, and
        entrepreneurial career. From command line Mario emulators in C and
        full-stack applications using Python and flask, to now developing my own
        React applicationss, I have gained a strong background in front end
        JavaScript development as well as an operational, but growing
        understanding of full-stack development with Node and Express. Now I am
        focusing on the beginning of my career in web development. If you would
        like to get to know me on a personal level, please get in touch via
        e-mail at
        <span id="emailHighlight"> rhodestrt@gmail.com</span>. You might also be
        interested in taking a look at my full array of skills, as well as some
        of the projects I have completed by scrolling down this page.
      </p>
    </div>
  );
};

export default About;
