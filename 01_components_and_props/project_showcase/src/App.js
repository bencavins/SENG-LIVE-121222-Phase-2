import List from "./List";
import projects from "./projects";

function App() {

  return (
    <>
      <div>Project Showcase</div>
      <List 
        title="Project List" 
        subTitle="Some Projects"
        projects={projects} />
    </>
  )
}

export default App;
