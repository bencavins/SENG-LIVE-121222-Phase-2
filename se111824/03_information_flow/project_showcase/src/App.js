import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";


const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  function handleDarkModeButtonClick() {
    setIsDarkMode(!isDarkMode);
  }

  function handleFilterInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function loadProjectData() {
    fetch('http://localhost:4000/projects')
    .then(resp => resp.json())
    .then(jsonData => setProjects(jsonData))
  }

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    fetch('http://localhost:4000/projects')
    .then(resp => resp.json())
    .then(jsonData => setProjects(jsonData))
  }, [])

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  // - Add an onClick event listener to the "Load Projects" 
  // button

  // - When the button is clicked, make a fetch 
  // request to "http://localhost:4000/projects"
  // and set the `projects` state to the value 
  // returned by the response


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        handleClick={handleDarkModeButtonClick}
        projects={searchResults} />
      <ProjectForm />
      <button onClick={loadProjectData}>Load Projects</button>
      <ProjectList 
        projects={searchResults} 
        handleClick={handleDarkModeButtonClick}
        handleChange={handleFilterInputChange} />
    </div>
  );
};

export default App;
