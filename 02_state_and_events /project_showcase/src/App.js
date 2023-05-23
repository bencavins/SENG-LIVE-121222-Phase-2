import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from "react"

const App = () => {

  // [stateVariable, stateSetterFunction]
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleDarkMode(event) {
    setIsDarkMode(prevVal => !prevVal)
    // f = (prevVal) => !prevVal
    // isDarkMode = f(isDarkMode)
    // isDarkMode = f(true)
    // isDarkMode = false
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header handleClick={handleDarkMode} isDarkMode={isDarkMode} />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
