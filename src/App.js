import "./components/componentStyles.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hello from "./components/Hello";
import useWindowSize from "./components/useWindowSize";

const App = () => {
  const windowSize = useWindowSize();

  return (
    <div className="layout">
      <Nav windowSize={windowSize} />
      <Hello />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
