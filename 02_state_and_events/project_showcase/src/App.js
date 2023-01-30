import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

import { useState } from "react";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true)
  const appClass = isDarkMode ? 'App' : 'App light'

  return (
    <div className={appClass}>
      <Header 
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode} />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
