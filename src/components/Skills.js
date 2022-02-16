import "./componentStyles.css";
import {
  mdiXml,
  mdiLibrary,
  mdiTools,
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiReact,
  mdiNodejs,
  mdiLeaf,
  mdiDatabaseSearch,
  mdiTestTube,
  mdiGit,
  mdiWebpack,
  mdiAtom,
  mdiLanguagePython,
} from "@mdi/js";
import Icon from "@mdi/react";

const Skills = () => {
  return (
    <div className="skills-layout">
      <h1>
        My <span style={{ color: "white" }}>Skills</span>
      </h1>
      <div className="skills-container">
        <div className="card">
          <Icon path={mdiXml} />
          <p>Languages</p>
          <div>
            <p>JavaScript</p>
            <Icon path={mdiLanguageJavascript} style={{ color: "yellow" }} />
          </div>
          <div>
            <p>HTML</p>
            <Icon path={mdiLanguageHtml5} style={{ color: "orange" }} />
          </div>
          <div>
            <p>CSS</p>
            <Icon path={mdiLanguageCss3} style={{ color: "skyBlue" }} />
          </div>
          <div>
            <p>Python</p>
            <Icon path={mdiLanguagePython} style={{ color: "var(--aqua)" }} />
          </div>
        </div>
        <div className="card">
          <Icon path={mdiLibrary} />
          <p>Frameworks/Databases</p>
          <div>
            <p>React.js</p>
            <Icon path={mdiReact} style={{ color: "skyBlue" }} />
          </div>
          <div>
            <p>Node.js/Express.js</p>
            <Icon path={mdiNodejs} style={{ color: "var(--salmon)" }} />
          </div>
          <div>
            <p>MongoDB/Mongoose</p>
            <Icon path={mdiLeaf} style={{ color: "green" }} />
          </div>
          <div>
            <p>SQLite</p>
            <Icon
              path={mdiDatabaseSearch}
              style={{ color: "var(--bloodRed)" }}
            />
          </div>
          <div>
            <p>Jest</p>
            <Icon path={mdiTestTube} style={{ color: "var(--darkBlue)" }} />
          </div>
        </div>
        <div className="card">
          <Icon path={mdiTools} />
          <p>Tooling</p>
          <div>
            <p>Git</p>
            <Icon path={mdiGit} style={{ color: "lightGrey" }} />
          </div>
          <div>
            <p>Webpack</p>
            <Icon path={mdiWebpack} style={{ color: "skyBlue" }} />
          </div>
          <div>
            <p>Atom</p>
            <Icon path={mdiAtom} style={{ color: "turquoise" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
