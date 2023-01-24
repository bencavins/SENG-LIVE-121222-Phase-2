import ProjectListItem from "./ProjectListItem";

function ProjectList(props) {
  const list = props.projects.map(project => {
    return <ProjectListItem 
      project={project}
      key={project.id} />
  })
  return (
    <>
      {list}
    </>
  )
}

export default ProjectList;