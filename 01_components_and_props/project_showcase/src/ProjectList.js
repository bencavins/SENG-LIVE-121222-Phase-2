import Project from "./Project"

function ProjectList({projects}) {

  // transform each project obj into a <Project /> element
  const listItems = projects.map((project) => {
    return <Project title={project.title} img={project.img} subtitle={project.subtitle} />
  })

  return <div>
    <ul>
      {/* render the array of <Project /> elements */}
      {listItems}
    </ul>
  </div>
}

// export required to import in another file
export default ProjectList