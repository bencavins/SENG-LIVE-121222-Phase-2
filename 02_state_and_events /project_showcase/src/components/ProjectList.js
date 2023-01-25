import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {

  const [searchQuery, setSearchQuery] = useState('')

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  const filteredProjects = projects.filter(project => {
    return project.name.toLowerCase()
      .includes(searchQuery.toLowerCase())
  })
  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
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
        onChange={handleChange}
      />
      <p>Search Query: {searchQuery}</p>
      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
