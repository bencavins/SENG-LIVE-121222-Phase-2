function ProjectListItem({project}) {
  const {name, about, phase, link, image} = project
  return (
    <>
      <br />
      <h3><a href={link}>{name}</a> | Phase: {phase}</h3>
      <p>{about}</p>
      <img src={image} style={{width: '200px'}} alt=":(" />
      <br />
    </>
  )
}

export default ProjectListItem;
