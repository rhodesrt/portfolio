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
          title="Sort Visualizer"
          description="Visualization of common sorting algorithms"
          id="sortVisualizer"
        />
        <Project
          title="Sylva"
          description="Savannah Population Dynamics Simulator."
          id="sylva"
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
          title="Shopping Cart"
          description="Web Store modeled after the Laser Sailboat Performance Store."
          id="shoppingCart"
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
  const handleLinkClick = (e) => {
    if (props.title === "Shopping Cart") {
      if (e.target.textContent === "Code") {
        window.open(
          "https://github.com/rhodesrt/shopping-cart/tree/sourceCode/src"
        );
      } else {
        window.open("https://rhodesrt.github.io/shopping-cart");
      }
    } else if (props.title === "Memory Game") {
      if (e.target.textContent === "Code") {
        window.open("https://github.com/rhodesrt/memory-game");
      } else {
        window.open("https://rhodesrt.github.io/memory-game/");
      }
    } else if (props.title === "Admin Dashboard") {
      if (e.target.textContent === "Code") {
        window.open("https://github.com/rhodesrt/admin_dashboard");
      } else {
        window.open("https://rhodesrt.github.io/admin_dashboard/");
      }
    } else if (props.title === "Local Library") {
      if (e.target.textContent === "Code") {
        window.open("https://github.com/rhodesrt/localLibrary");
      } else {
        window.open("https://obscure-thicket-03412.herokuapp.com/catalog");
      }
    } else if (props.title === "Sylva") {
      if (e.target.textContent === "Code") {
        window.open("https://github.com/rhodesrt/sylva");
      } else {
        window.open("https://rhodesrt.github.io/sylva");
      }
    } else if (props.title === "Sort Visualizer") {
      if (e.target.textContent === "Code") {
        window.open("https://github.com/rhodesrt/sort-visualization");
      } else {
        window.open("https://rhodesrt.github.io/sort-visualization");
      }
    }
  };

  return (
    <div className="project-card">
      <div
        className="project-picture"
        onClick={handleLinkClick}
        id={props.id}
      ></div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div className="madeWith">
        <p>Made With: </p>
        {props.title === "Sort Visualizer" ? (
          <>
            <Icon path={mdiReact} />
            <Icon path={mdiLanguageJavascript} style={{ color: "yellow" }} />
            <Icon path={mdiLanguageHtml5} style={{ color: "purple" }} />
            <Icon path={mdiLanguageCss3} style={{ color: "green" }} />
          </>
        ) : props.title === "Shopping Cart" ? (
          <>
            <Icon path={mdiReact} />
            <Icon path={mdiLanguageJavascript} style={{ color: "yellow" }} />
            <Icon path={mdiLanguageHtml5} style={{ color: "purple" }} />
            <Icon path={mdiLanguageCss3} style={{ color: "green" }} />
          </>
        ) : props.title === "Memory Game" ? (
          <>
            <Icon path={mdiReact} />
            <Icon path={mdiLanguageJavascript} style={{ color: "yellow" }} />
            <Icon path={mdiLanguageHtml5} style={{ color: "purple" }} />
            <Icon path={mdiLanguageCss3} style={{ color: "green" }} />
          </>
        ) : props.title === "Admin Dashboard" ? (
          <>
            <Icon path={mdiLanguageHtml5} style={{ color: "purple" }} />
            <Icon path={mdiLanguageCss3} style={{ color: "green" }} />
          </>
        ) : props.title === "Sylva" ? (
          <>
            <Icon path={mdiReact} />
            <Icon path={mdiLanguageJavascript} style={{ color: "yellow" }} />
            <Icon path={mdiLanguageHtml5} style={{ color: "purple" }} />
            <Icon path={mdiLanguageCss3} style={{ color: "green" }} />
          </>
        ) : (
          <>
            <Icon path={mdiLanguageJavascript} style={{ color: "yellow" }} />
            <Icon path={mdiLanguageHtml5} style={{ color: "purple" }} />
            <Icon path={mdiLanguageCss3} style={{ color: "skyBlue" }} />
            <Icon path={mdiNodejs} style={{ color: "var(--aqua)" }} />
            <Icon path={mdiLeaf} style={{ color: "green" }} />
          </>
        )}
      </div>
      <div className="project-buttons">
        {
          <>
            <button onClick={handleLinkClick}>Demo</button>
            <button onClick={handleLinkClick}>Code</button>
          </>
        }
      </div>
    </div>
  );
};
