import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// Deliverable 1: Implement useEffect in App component 
// to load projects

  // Import the `useEffect` hook from the React library

  // Invoke `useEffect` and make a `GET` request using 
  // the `fetch` method

  // Update `projects` state upon successful response 
  // from the server

// Deliverable 2: Demonstrate the order of operations 
// between rendering a component and running the side 
// effect

  // Place a console.log() inside the `App` component as 
  // well as the `useEffect` method

  // Open up the devtools to observe when each phase of 
  // the component will occur 

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
    .then((res) => res.json())
    .then((projects) => setProjects(projects));
    console.log('in useEffect')
  }, [])

  // useEffect(() => {})   // always runs code after any render
  // useEffect(() => {}, [])  // only runs code after first render
  // useEffect(() => {}, [var1, var2])  // runs if the vars in the array have changed

  console.log(projects)

  const onAddProject = newProject => {
    const newProjectCollection = [...projects, newProject];
    setProjects(newProjectCollection);
  }
  


  const handleClick = () => {
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Update "projects" State With Filtered List When Error Occurs
  // With POST Request
  const onError = filteredList => { setProjects(filteredList) };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm 
        onAddProject={onAddProject} 
        onError={onError}
        projects={projects}
      />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;