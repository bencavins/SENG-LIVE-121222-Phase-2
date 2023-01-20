// Deliverable 2: Use Switch and Route to set up initial routes so we can 
// conditionally render components based on URL

  // DONE - Import the `Switch` component from the `react-router-dom` library 
  // and wrap the components designated for routing

  // DONE - Import the `Route` component from the `react-router-dom` library 
  // and wrap each individual component designated for routing

  // DONE - Provide the `path` prop to the `Route` component to create a URL 
  // path associated with the component

  // DONE - Demonstrate each route in the browser to confirm desired expectation 
  // is occuring

  // DONE - Demonstrate the use of the `exact` prop passed to the `Route` 
  // component

  import { useState, useEffect } from "react";

  import Header from "./components/Header";
  import ProjectForm from "./components/ProjectForm";
  import ProjectList from "./components/ProjectList";
  import ProjectEditForm from "./components/ProjectEditForm";
  import ProjectDetail from "./components/ProjectDetail"
  import Home from "./components/Home";

  import { Switch, Route } from 'react-router-dom';
  
  const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:4000/projects")
        .then((resp) => resp.json())
        .then((projects) => setProjects(projects));
    }, []);
  
    const onToggleDarkMode = () => {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    };
  
    const onAddProject = (newProj) => {
      setProjects((projects) => [...projects, newProj]);
    };
  
    const onUpdateProject = (updatedProj) => {
      const updatedProjects = projects.map((ogProject) => {
        if (ogProject.id === updatedProj.id) {
          return updatedProj;
        } else {
          return ogProject;
        }
      });
      setProjects(updatedProjects);
    };
  
    const onDeleteProject = (deletedProj) => {
      const updatedProjects = projects.filter(
        (project) => project.id !== deletedProj.id
      );
      setProjects(updatedProjects);
    };
  
    return (
      <div className={isDarkMode ? "App" : "App light"}>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
        <Switch>

          {/* / => Root URL */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* :id => Symbol */}
          {/* /projects/:id/edit => Edit Form for Individual Projects */}
          <Route path="/projects/:id/edit">
            <ProjectEditForm onUpdateProject={onUpdateProject} />
          </Route>
          
          {/* /projects/new => Create Form for Adding New Projects  */}
          <Route path="/projects/new">
            <ProjectForm onAddProject={onAddProject} />
          </Route>
          
          {/* /projects/:id => Show Page for Individual Projects */}
          <Route path="/projects/:id">
            {/* <ProjectDetail /> */}
          </Route>

          {/* /projects => List of All Projects */}
          <Route path="/projects">
            <ProjectList
              projects={projects}
              onDeleteProject={onDeleteProject}
            />
          </Route>
        </Switch>
      </div>
    );
  };
  
  export default App;
  