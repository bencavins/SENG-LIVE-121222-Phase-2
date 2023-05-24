const ProjectForm = ({ setProjects }) => {

  function handleSubmit(event) {
    

    event.preventDefault()
    console.log(event.target.name.value)
    console.log(event.target.about.value)

    fetch("http://localhost:4000/projects", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Accepts': 'application/json'
      },
      body: JSON.stringify({
        "name": event.target.name.value,
        "about": event.target.about.value
      })
    })
    .then(resp => resp.json())
    .then(newProject => {
      // update projects state (add the new project)
      // make sure to make a copy!!
      setProjects(prevProjects => {
        const newProjects = [...prevProjects, newProject]
        return newProjects
      })
    })
  }

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" />
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
