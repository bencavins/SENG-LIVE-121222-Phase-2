import ProjectListItem from "./ProjectListItem";

import { useState } from "react";

const ProjectList = ({ projects }) => {
  const [search, setSearch] = useState("")

  function handleChange(event) {
    setSearch(event.target.value)
  }

  // create new filtered down projects array
  const filteredProjects = projects.filter(project => {
    // needs to return true or false
    return project.name.toLowerCase().includes(
      search.toLowerCase()
    )
  })

  // map over filtered projects
  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
    // <ProjectListItem key={project.id} name={project.name} link={project.link} />
  ));

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
        type="text" 
        placeholder="Search..."
        onChange={handleChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
