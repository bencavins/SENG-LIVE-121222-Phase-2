import ProjectListItem from "./ProjectListItem";

import {useState} from 'react';

const ProjectList = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [phaseFilter, setPhaseFilter] = useState('All')

  function handleChange(event) {
    setSearchQuery(event.target.value)
  }

  function handlePhase4Click(event) {
    setPhaseFilter(4)
  }

  function handlePhaseAllClick(event) {
    setPhaseFilter('All')
  }

  const filteredItems = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })
  
  const filter2 = filteredItems.filter(project => {
    return project.phase === phaseFilter || phaseFilter === 'All'
  })

  const projectListItems = filter2.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button onClick={handlePhaseAllClick}>All</button>
        <button>Phase 5</button>
        <button onClick={handlePhase4Click}>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <p>{searchQuery}</p>
      <input 
        type="text" 
        placeholder="Search..."
        onChange={handleChange} />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
