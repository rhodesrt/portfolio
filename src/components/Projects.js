import "./componentStyles.css";
import Icon from "@mdi/react";
import {
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiReact,
  mdiNodejs,
  mdiLeaf,
} from "@mdi/js";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>
        My <span style={{ color: "white" }}>Projects</span>
      </h1>
      <div className="project-cards-grid">
        <Project
          title="Shopping Cart"
          description="Web Store modeled after the Laser Sailboat Performance Store."
          id="shoppingCart"
        />
        <Project
          title="Memory Game"
          description="Memory challenge with flags of different countries for a high score."
          id="memoryGame"
        />
        <Project
          title="Admin Dashboard"
          description="Mock Project Manager App layout"
          id="adminDashboard"
        />
        <Project
          title="Sign Up Sheet"
          description="An example of a website signup form."
          id="signupSheet"
        />
        <Project
          title="Local Library"
          description="Online book catalog with connection to database and Express backend."
          id="localLibrary"
        />
      </div>
    </div>
  );
};

export default Projects;

const Project = (props) => {
  return (
    <div className="project-card">
      <div id={props.id}></div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className="madeWith">
        <p>Made With: </p>
        <Icon path={mdiReact} />
        <Icon path={mdiLanguageJavascript} style={{ color: "yellow" }} />
        <Icon path={mdiLanguageHtml5} style={{ color: "purple" }} />
        <Icon path={mdiLanguageCss3} style={{ color: "green" }} />
      </div>
      <div className="project-buttons">
        <button>Demo</button>
        <button>Code</button>
      </div>
    </div>
  );
};
