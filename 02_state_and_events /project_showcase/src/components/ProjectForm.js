const ProjectForm = () => {
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.name, event.target.about)
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
