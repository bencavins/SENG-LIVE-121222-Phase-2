import ProjectListItem from "./ProjectListItem";

import { useState } from "react";

const ProjectList = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState("")
  
  function handleChange(event) {
    // set searchQuery to the value in the input field
    setSearchQuery(event.target.value)
  }

  // filter out projects we don't care about
  const filteredProjects = projects.filter((project) => {
    // convert both strings to lowercase to make the includes case-insensitive
    const projectNameLower = project.name.toLowerCase()
    const searchQueryLower = searchQuery.toLowerCase()
    if (projectNameLower.includes(searchQueryLower)) {
      return project
    }

    // if (project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
    //   return project
    // }
  })

  // map each project to a ProjectListItem
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
      <input type="text" placeholder="Search..." onChange={handleChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
