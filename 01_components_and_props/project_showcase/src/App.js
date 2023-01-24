import Card from "./Card";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import projects from "./projects";

function App() {
  return (
    <>
      <div>Project Showcase</div>
      <Header firstName="ben" lastName="cavins" age={31} />
      <Card greeting="hello" subGreeting="world!" />
      <Card greeting="hola" subGreeting="mundo!" />
      <ProjectForm projects={projects} />
      <ProjectList projects={projects} />
    </>
  );
}

export default App;