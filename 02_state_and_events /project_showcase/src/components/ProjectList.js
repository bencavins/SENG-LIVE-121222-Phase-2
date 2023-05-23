import { useState } from "react";

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {

  const [search, setSearch] = useState("")
  const [phase, setPhase] = useState("All")

  function handleChange(event) {
    setSearch(event.target.value)
  }

  function handleP3() {
    setPhase(3)
  }

  const filteredPhaseProjects = projects.filter(project => {
    return project.phase === phase || phase === "All"
  })

  const filteredProjects = filteredPhaseProjects.filter((project) => {
    return project.name.includes(search.toLowerCase())
  })

  const projectListItems = filteredProjects.map((project) => (
    // <ProjectListItem name={project.name} about={project.about} />
    <ProjectListItem key={project.id} {...project} />
  ));



  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button onClick={handleP3}>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
        type="text" 
        placeholder="Search...!!!!!!"
        onChange={handleChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
