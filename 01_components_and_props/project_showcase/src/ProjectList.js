import ProjectListItem from "./ProjectListItem"

export default function ProjectList(props) {
  return (
    <div>
      {props.projects.map(project => {
        return <ProjectListItem 
            id={project.id} 
            key={project.id} 
            {...project} />
      })}
    </div>
  )
}
