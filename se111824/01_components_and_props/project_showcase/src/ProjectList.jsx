import ProjectListItem from "./ProjectListItem"


export default function ProjectList(props) {
  console.log(props.projects)
  return (
    <div>
      <h3>Project List</h3>
      <ul>
        {/* <ProjectListItem name={props.projects[0].name} about={props.projects[0].about} />
        <ProjectListItem name={props.projects[1].name} about={props.projects[1].about} />
        <ProjectListItem name={props.projects[2].name} about={props.projects[2].about}/> */}
        {props.projects.map(project => {
        //   return <ProjectListItem name={project.name} about={project.about} />
            return <ProjectListItem {...project} />
        })}
      </ul>
    </div>
  )
}