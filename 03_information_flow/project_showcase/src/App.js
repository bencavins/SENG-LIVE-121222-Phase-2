import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  // - Add an onClick event listener to the "Load Projects" 
  // button

  // - When the button is clicked, make a fetch 
  // request to "http://localhost:4000/projects"
  // and set the `projects` state to the value 
  // returned by the response

  // fetch("http://localhost:4000/projects")
  //   .then(resp => resp.json())
  //   .then(data => setProjects(data))

  // useEffect(() => {})
  // runs the function before every single render always

  // useEffect(() => {}, [])
  // runs the function only before the first render

  // useEffect(() => {}, [vars])
  // runs the function only if the "vars" have changed

  useEffect(() => {
    fetch("http://localhost:4000/projects")
    .then(resp => resp.json())
    .then(data => setProjects(data))
  }, [])


  function handleLoadProjects() {
    fetch("http://localhost:4000/projects")
    .then(resp => resp.json())
    .then(data => setProjects(data))
  }

  return (
    <div className="App">
      <Header />
      <ProjectForm setProjects={setProjects} />
      <button onClick={handleLoadProjects} >Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
