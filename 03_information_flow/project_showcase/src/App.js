import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  // Inverse data flow
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state
  function handleClick(event) {
    fetch('http://localhost:4000/projects')
      .then(resp => resp.json())
      .then(projects => setProjects(projects))
      .catch(error => console.log(error))
  }

  // - Add an onClick event listener to the "Load Projects" 
  // button

  // - When the button is clicked, make a fetch 
  // request to "http://localhost:4000/projects"
  // and set the `projects` state to the value 
  // returned by the response

  const onToggleDarkMode = () => setIsDarkMode(value => !value);
  const theme = isDarkMode ? "App" : "App light"

  return (
    <div className={theme}>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
