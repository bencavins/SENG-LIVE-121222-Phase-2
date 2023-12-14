// Uncontrolled form setup steps:
// 1. register submit event function
// 2. grab the form data from the DOM (event.target.whatever.value, etc) when the submit fires
// 3. POST the data to the DB
// 4. render the new data on the page (add the data to state) 

// Controlled form setup:
// 1. create state for the form data
// 2a. register change events for *each* input on the form
// 2b. the change events need to update the form data state
// 2c. any updates to form data state should update the input on the page
// 3. register a submit event when the form is submitted
// 4. POST the form data to the DB
// 5. render the new data on the page

import { useState } from "react";

const ProjectForm = ({ projects, setProjects }) => {

  const [formData, setFormData] = useState({
    "name": "",
    "about": "",
    "phase": "",
    "link": "",
    "image": ""
  })

  function handleChange(event) {
    console.log("event.target.name", event.target.name)
    console.log("event.target.value", event.target.value)

    // update this field in the formData obj
    // formData[event.target.name] = event.target.value
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch("http://localhost:4000/projects", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // pessimistic rendering
      setProjects(prevProjects => [...prevProjects, data])
    })

    // this is what we want to do, but it doesn't work
    // projects.push(newProject)
    // setProjects(projects)

    // we need to make a copy
    // const newProjectsArray = [...projects, newProject]
    // setProjects(newProjectsArray)

    // we should use an arrow function for this
    
    // optimistic rendering
    // setProjects(prevProjects => [...prevProjects, newProject])
    
    // // this is what our arrow function is doing
    //     function myFunc(prevProjects) {
    //       return [...prevProjects, newProject]
    //     }
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" onChange={handleChange} value={formData.about} />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" onChange={handleChange} value={formData.phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" onChange={handleChange} value={formData.link} />

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" onChange={handleChange} value={formData.image} />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
