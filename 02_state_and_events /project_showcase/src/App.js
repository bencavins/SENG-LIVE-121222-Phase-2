import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleClick(event) {
    setIsDarkMode(prevVal => !prevVal)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header 
        isDarkMode={isDarkMode}
        handleClick={handleClick} />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
