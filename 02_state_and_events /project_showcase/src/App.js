import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from "react";

const App = () => {
  // create state var and setter function
  const [isDarkMode, setIsDarkMode] = useState(true)

  // create click function
  function handleClick(event) {
    setIsDarkMode(prevVal => !prevVal)
  }

  // pass state var and click function down to Header as props
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
