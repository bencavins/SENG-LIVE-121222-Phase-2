import Header from "./Header";
import ProjectList from "./ProjectList";
import projects from "./projects";

function App() {
  return (
    <div>
      <Header headerText="Project Showcase" />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;