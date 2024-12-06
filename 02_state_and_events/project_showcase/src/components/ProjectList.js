import ProjectListItem from "./ProjectListItem";

import { useState } from "react";

const ProjectList = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = projects.filter((project) => {
    if (project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return project
    }
  })

  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }


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
      <input type="text" placeholder="Search..." onChange={handleChange}/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
